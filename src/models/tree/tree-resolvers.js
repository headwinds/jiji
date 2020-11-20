module.exports = {
  Query: {
    tree: async (_source, { xmlUrl }, { dataSources }) => {
      return dataSources.CabinQuestAPI.getTree(xmlUrl);
    },
  },
};
