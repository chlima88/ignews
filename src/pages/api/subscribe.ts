import { query as q } from 'faunadb';
import { fauna } from './../../services/fauna';
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { stripe } from "../../services/stripe";

type User = {
  ref: {
    id: string
  },
  data: {
    stripeCustomerId: string
  }
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method == "POST") {
    const session = await getSession({ req: request  })

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    )

    let stripeCustomerId = user.data.stripeCustomerId

    if (!stripeCustomerId) {
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
        // metadata
      })

      stripeCustomerId = stripeCustomer.id

      await fauna.query(
        q.Update(
          q.Ref(q.Collection('users'), user.ref.id),
          {
            data: { stripeCustomerId }
          }
        )
      )

    }

    
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      payment_method_types: ['card'],
      billing_address_collection: "required",
      line_items: [
        {price: "price_1JfdH4HlZ9xCx6M3tN9bJbao", quantity:1 }
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })

    return response.status(200).json({sessionId: stripeCheckoutSession.id})

  } else {
    response.setHeader('Allow', 'POST')
    response.status(405).end('Method Not Allowed')
  }
}