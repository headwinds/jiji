module.exports = {
  Query: {
    book: async (_, { id }, { dataSources, siteId }) =>
      dataSources.BookApi.getBookById(siteId, id),
  },
};
