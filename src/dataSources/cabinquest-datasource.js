"use strict";

const { RESTDataSource } = require("apollo-datasource-rest");

// https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss

class CabinQuestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://cabinquest.now.sh/";
  }
  // /:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss
  async getTree(xmlUrl) {
    const url = `bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss`;
    const data = this.get(url);
    const json = await data;
    console.log("data: ", json);
    return json;
  }
}

module.exports = CabinQuestAPI;
