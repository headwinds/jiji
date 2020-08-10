"use strict";

const HybrisDataSource = require("./hybris-datasource");
const { getBookReducer } = require("./reducers/book-reducer");
const { QUERY_STRINGS, REQUEST_HEADERS } = require("../constants");

class BookApi extends HybrisDataSource {
  constructor() {
    super("Book");
  }

  /* istanbul ignore next*/
  willSendRequest(request) {
    request.headers.set(REQUEST_HEADERS.LANGUAGE, this.context.language);
    request.headers.set(
      REQUEST_HEADERS.AUTHORIZATION,
      this.context.accessToken
    );
    this.context.logger.debug({
      message: "Request from Book",
      request,
    });
  }

  async getBookById(siteId, id) {
    const book = await this.get(`${siteId}/books/${id}`, {
      fields: QUERY_STRINGS.MOBILE,
    });
    return getBookReducer(book);
  }
}

module.exports = BookApi;
