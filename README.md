
## Running locally
This is a [Next.js](https://nextjs.org/) project - view the [docs](https://nextjs.org/docs/getting-started) for more info.

Example `.env`
```
NEXT_PUBLIC_SENTRY_DSN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SENTRY_ENVIRONMENT='development'
SENTRY_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_INFURA_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_REACT_APP_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GITPOAP_API_URL=http://localhost:3001
NEXT_PUBLIC_DISCORD_CLIENT_ID=xxxxxxxxxxxxxxxxxxx
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

View the component library on a deployed version of [Storybook](https://gitpoap-fe-storybook.vercel.app/?path=/story/button--primary0).

## GraphQL Code generation

`yarn gql:generate-dev`: Generate graphql hooks and types based on a local version of `schema.graphql` found in `gitpoap-backend`

`yarn gql:generate`: Generate graphql hooks and types based on the graphql schema found at `api.gitpoap.io/graphql`
