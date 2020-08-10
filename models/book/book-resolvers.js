module.exports = {
  Query: {
    book: async (_, { id }, { dataSources, siteId }) =>
      dataSources.ProductApi.getProductById(siteId, id),
  },
};
