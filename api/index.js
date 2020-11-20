const cors = require("micro-cors")(); // highlight-line
const { ApolloServer, gql } = require("apollo-server-micro");
const { ScoutAPI } = require("../src/dataSources");
const { CabinQuestAPI } = require("../src/dataSources");
// root
const rootTypeDefs = require("../src/models/root/root-type");
const rootResolvers = require("../src/models/root/root-resolvers");
// tree
const treeTypeDefs = require("../src/models/tree/tree-type");
const treeResolvers = require("../src/models/tree/tree-resolvers");
// gold
const goldTypeDefs = require("../src/models/gold/gold-type");
const goldResolvers = require("../src/models/gold/gold-resolvers");

const typeDefs = [rootTypeDefs, goldTypeDefs, treeTypeDefs];
const resolvers = [rootResolvers, goldResolvers, treeResolvers];

const dataSources = () => ({
  ScoutAPI: new ScoutAPI(),
  CabinQuestAPI: new CabinQuestAPI(),
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  playground: true,
  introspection: true,
});

const handler = apolloServer.createHandler({
  path: "/api",
});

module.exports = cors((req, res) =>
  req.method === "OPTIONS" ? res.end() : handler(req, res)
);
/*
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api" });
*/
