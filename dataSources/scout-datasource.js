"use strict";

const { RESTDataSource } = require("apollo-datasource-rest");

class ScoutAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://scout.now.sh/api/";
  }

  async getGold(id) {
    return this.get(`gold/${id}`);
  }

  async getGolds(limit = 10) {
    const data = await this.get("gold");
    console.log(data);
    return data.golds;
  }
}

module.exports = ScoutAPI;

// https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest
