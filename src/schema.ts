import { gql, IResolvers } from "apollo-server-express";

export const typeDefs = gql`
  type Joke {
    value: String!
    id: ID!
    icon_url: String!
  }
  type Query {
    chuckNorrisCategories: [String!]!
    chuckNorrisRandomJokes(category: String!): Joke
  }
`;

export const resolvers: IResolvers = {
  Query: {
    chuckNorrisCategories: (_, __, { dataSources }) =>
      dataSources.chucknorrisApi.getAllChuckNorrisCategories(),
    chuckNorrisRandomJokes: (_, { category }, { dataSources }) =>
      dataSources.chucknorrisApi.getChuckNorrisRandomJokesByCategory({
        category: category,
      }),
  },
};
