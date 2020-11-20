/*
completed_on: null,
created_at: "Wed, 07 Oct 2020 21:35:07 GMT",
database_connection.Gold: 1,
gold_type: "common",
text: "hello world",
user_account_id: 1
*/

const { gql } = require("apollo-server-micro");

module.exports = gql`
  type Gold {
    gold_type: String
    text: String
    user_id: String
    created_at: String
  }

  input GoldInput {
    gold_type: String
    text: String
    user_id: String
  }

  type CreateGoldResponse {
    message: String
    status: Int
    gold: Gold
  }

  extend type Query {
    golds: [Gold]
  }

  extend type Mutation {
    createGold(goldInput: GoldInput!): CreateGoldResponse
  }
`;
