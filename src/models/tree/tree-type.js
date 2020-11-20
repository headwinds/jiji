const { gql } = require("apollo-server-micro");

module.exports = gql`
  type Branch {
    title: String
    summary: String
  }

  type Tree {
    branches: [Branch]
  }

  extend type Query {
    tree(xmlUrl: String!): Tree
  }
`;
