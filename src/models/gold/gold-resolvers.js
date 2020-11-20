module.exports = {
  Query: {
    golds: async (_source, _args, { dataSources }) => {
      return dataSources.ScoutAPI.getGolds();
    },
  },
  Mutation: {
    createGold: async (_, { goldInput }, { dataSources }) => {
      console.log("creating... goldInput: ", goldInput);
      return dataSources.ScoutAPI.postGold(new Object({ ...goldInput }));
    },
  },
};
