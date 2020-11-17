module.exports = {
  Query: {
    golds: async (_source, _args, { dataSources }) => {
      return dataSources.ScoutAPI.getGolds();
    },
  },
};
