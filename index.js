const { ApolloServer, gql } = require("apollo-server");
const { ScoutAPI } = require("./datasources");
const { CabinQuestAPI } = require("./datasources");
// tree
const treeTypeDefs = require("./models/tree/tree-type");
const treeResolvers = require("./models/tree/tree-resolvers");
// gold
const goldTypeDefs = require("./models/gold/gold-type");
const goldResolvers = require("./models/gold/gold-resolvers");

const rootTypeDefs = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const rootResolvers = {
  Query: {
    root: () => "root",
  },
  Mutation: {
    root: () => "root",
  },
};

const typeDefs = [rootTypeDefs, goldTypeDefs, treeTypeDefs];
const resolvers = [rootResolvers, goldResolvers, treeResolvers];

const dataSources = () => ({
  ScoutAPI: new ScoutAPI(),
  CabinQuestAPI: new CabinQuestAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
