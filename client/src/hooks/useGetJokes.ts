import { gql } from "@apollo/client";

export const GET_JOKES = gql`
  query chuckNorrisRandomJokes($category: String!) {
    chuckNorrisRandomJokes(category: $category) {
      id
      value
      icon_url
    }
  }
`;
