# graphql-reactjs-apollo-demo-app

Demo app based on GraphQL, ReactJS, ApolloClient, Material UI and MongoDB

# Links

MongoDB provider https://cloud.mongodb.com/

# Setup

1) Install dependencies

```shell
npm install
```

2) Setup your test MongoDB cluster and database at https://cloud.mongodb.com/ (unless you already have them)

3) Add environment variables

```shell
cp .env.example .env
```

Set creds to real in `.env` file (M_USER - mongoDB username, M_PASS - mongoDB user password)

4) Run Node - Express JS server:

```shell
npm run dev
```

5) Now access app in http://localhost:3005/graphql
