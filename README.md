# IGNews
## _React world news portal_

## About

The idea behind this project is to create a news portal using the most modern technologies like NextJS 

This project was consists in an application developed with ReactJS and NextJS to present posts and control the access through a subscription system

We used NextJS framework by aplying concepts like external API, API Root, Server Side Rendering (SSR), Static Site Generation (SSG) and Next-Auth.
We also used 3rd party services like FaunaDB to store user data, Prismic CSM to manage post content and Stripe as the payment gateway.


## Features

- OAuth authentication 2.0 (Github and Google)
- User subscription control
- Payment Gateway integration
- Headless CMS Integration

## Techs

IgNews uses these projects to work properly:

- [TypeScript] - Markdown parser done right. Fast and easy to extend.
- [ReactJS] - A JavaScript library for building user interfaces
- [NextJS] - hybrid static & server rendering, TypeScript support
- [SASS] - CSS with superpowers
- [Stripe] - A fully integrated suite of payments products
- [Prismic] - Headless CMS
- [FaunaDB] - Transactional database accessible via a cloud API.

## Requeriments

### Create and configure the following third party services:

- [Stripe]
- [FaunaDB]
- [Prismic]

### Necessary Software:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

## Installation

IgNews requires [Node.js] v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
# Clone the repository
$ git clone https://github.com/nelsonsantosaraujo/ignews.git

# Acess the repository folder
$ cd ignews

# Run yarn command to install the dependencies
$ yarn

# Copy the file ".env.local.example" with the name ".env.local"
# 
$ cp .env.local.example .env.local

# Run stripe listen to start a local webhook listener
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Run the application
$ yarn dev
```

# Setting up dotenv file

To everything work properly, we need to define a .env file with the following entries:

| Keys | Description |
| ------ | ------ |
| STRIPE_API_KEY | Stripe private API key |
| NEXT_PUBLIC_STRIPE_PUBLIC_KEY | Stripe Public API key |
| STRIPE_WEBHOOK_SECRET | Stripe Webhook password |
| STRIPE_SUCCESS_URL | URL to redirect in case of success in an Stripe operation |
| STRIPE_CANCEL_URL | URL to redirect in case of failure or canceled Stripe operation |
| FAUNADB_KEY | FaunaDB Access key |
| GITHUB_CLIENT_ID | App ID from Github created app |
| GITHUB_CLIENT_SECRET | App client authorization secret |
| GOOGLE_CLIENT_ID | Google App ID |
| GOOGLE_CLIENT_SECRET | Google App Secret |
| PRISMIC_ENDPOINT | Endpoint created on Prismic | 
| PRISMIC_ACCESS_TOKEN | Token used to access Prismic API|




## License

MIT

**Free Software, Hell Yeah!**

   [TypeScript]: <https://www.typescriptlang.org/>
   [ReactJS]: <https://reactjs.org/>
   [Node.js]: <http://nodejs.org>
   [NextJS]: <https://nextjs.org/>
   [SASS]: <https://sass-lang.com/>
   [Stripe]: <https://stripe.com/>
   [Prismic]: <https://prismic.io/>
   [FaunaDB]: <https://fauna.com/>

