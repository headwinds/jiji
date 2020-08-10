"use strict";

const { RESTDataSource } = require("apollo-datasource-rest");
const { isDebugConfig } = require("../config/utils");
const config = require("../config/config")();
const { REQUEST_HEADERS } = require("../constants/constants");
const { constructHeadersObj } = require("../utils");

class ScoutDataSource extends RESTDataSource {
  constructor(logTitle) {
    super();
    const { baseURL } = config.get("scout");
    this.baseURL = `${protocol}://${host}/${basePath}/${version}`;
    this.name = logTitle;
  }

  /* istanbul ignore next*/
  async willSendRequest(request) {
    const { X_CORRELATION_ID, X_LCL_CLIENTNAME, REQUEST_ID } = REQUEST_HEADERS;
    request.headers.set(X_CORRELATION_ID, this.context[X_CORRELATION_ID]);
    request.headers.set(X_LCL_CLIENTNAME, this.context[X_LCL_CLIENTNAME]);
    request.headers.set(REQUEST_ID, this.context.requestId);

    this.context.logger.debug({
      message: `Request from ${this.name}`,
      request: { ...request, headers: constructHeadersObj(request.headers) },
    });
  }

  async didReceiveResponse(response) {
    if (response.ok) {
      if (isDebugConfig()) {
        let okRes = this.parseBody(response);
        this.context.logger.debug({
          message: `Response to ${this.name}`,
          response: await okRes,
        });
        return okRes;
      }
      return this.parseBody(response);
    } else {
      throw await this.errorFromResponse(response);
    }
  }

  async trace(label, fn) {
    const profiler = this.context.logger.startTimer();
    try {
      return await fn();
    } finally {
      profiler.done({ message: `Perf: ${label}` });
    }
  }
}

module.exports = ScoutDataSource;
