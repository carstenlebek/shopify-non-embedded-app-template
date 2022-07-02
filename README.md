# 🚀Free Shopify x Next.js App Template for serverless non-embedded Apps

Everything to build your next non-embedded Shopify App and Marketing pages in one place.
This Template utilizes Middleware and APIs for OAuth, so no custom server is needed.

Intentionally barebones. 🦴

## Table of Contents

- 🤩 Features
- 👀 Requirements
- 🤓 Getting Started
- 🚀 One click deploy
- 🧰 Built with

## 🤩 Features

- ⚡ Next.js - React Framework for static rendering
- ✨ Serverless Architecture
- 💳 App Subscrptions
- 💾 Session Storage with Redis
- 🚇 Ngrok for development
- 🚀 Apollo/Client
- 🪝 Webhooks set up

## 👀 Requirements

- Shopify Partner Account
- Shopify Dev Store
- Ngrok account
- Upstash Redis Database

## 🤓 Getting Started

- Click `Use this template` or [this link](https://github.com/carstenlebek/shopify-non-embedded-app-template/generate)
- Create an App in your Shopify Partner Account
  - Set https://localhost as the App Url for now
  - Go to `App Setup` -> `Embedded app` and disable `Embed your app in Shopify admin`
- Fill out your `.env` file
  - `SHOPIFY_API_KEY`: The Shopify Api key of the app, you have just created
  - `SHOPIFY_API_SECRET_KEY`: The Shopify Api secret key of the app, you have just created
  - `SCOPES`: The [access scopes](https://shopify.dev/api/usage/access-scopes) your app needs
  - `HOST`: The Url of your app. Leave this empty for development
  - `SHOP`: Your dev stores url
  - `NGROK_AUTH_TOKEN`: Your [Ngrok auth token](https://dashboard.ngrok.com/get-started/your-authtoken)
  - `UPSTASH_REDIS_REST_URL`: Your Upstash Redis REST url.
  - `UPSTASH_REDIS_REST_TOKEN`: Your Upstash Redis REST token.
- Run `npm install`
- Run `npm run dev`
- Visit `https://{YOUR_APP_URL}/login` to install your app

## 🚀 One click deploy

Clone and deploy this template in one click to Vercel for free!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcarstenlebek%2Fshopify-non-embedded-app-template&env=SHOPIFY_API_KEY,SHOPIFY_API_SECRET_KEY,SCOPES,MONGO_URI&envDescription=API%20keys%20needed%20for%20this%20Shopify%20App%20Template.&project-name=non-embedded-shopify-app&repo-name=non-embedded-shopify-app)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🧰 Built with

- [Next.js](https://nextjs.org/)
- [@shopify/shopify-api](https://github.com/Shopify/shopify-node-api)
- [@apollo/client](https://www.apollographql.com/docs/react/)
