import express from "express";
import { ApolloServer, IResolvers } from "apollo-server-express";
import cors from "cors";
import { ChuckNorrisJokes } from "./dataSource";
import { typeDefs, resolvers } from "./schema";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    chucknorrisApi: new ChuckNorrisJokes(),
  }),
});

app.use("*", cors());

server.applyMiddleware({
  app,
  path: "/graphql",
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Apollo Server running on port ${PORT}`);
});
