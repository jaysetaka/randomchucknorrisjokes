import React from "react";
import client from "../../common/client/apollo-client";
import Home from "../home/home.component";
import { ApolloProvider } from "@apollo/client";

import "../../common/styles";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
