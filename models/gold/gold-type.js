/*
completed_on: null,
created_at: "Wed, 07 Oct 2020 21:35:07 GMT",
database_connection.Gold: 1,
gold_type: "common",
text: "hello world",
user_account_id: 1
*/

const { gql } = require("apollo-server");

module.exports = gql`
  type Gold {
    gold_type: String
    text: String
  }

  extend type Query {
    golds: [Gold]
  }
`;
