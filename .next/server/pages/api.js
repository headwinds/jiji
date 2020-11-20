module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o4ya");


/***/ }),

/***/ "6eC6":
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  Query: {
    golds: async (_source, _args, {
      dataSources
    }) => {
      return dataSources.ScoutAPI.getGolds();
    }
  },
  Mutation: {
    createGold: async (_, {
      goldInput
    }, {
      dataSources
    }) => {
      console.log("creating... goldInput: ", goldInput);
      return dataSources.ScoutAPI.postGold(new Object(_objectSpread({}, goldInput)));
    }
  }
};

/***/ }),

/***/ "7IOu":
/***/ (function(module, exports) {

module.exports = {
  Query: {
    root: () => "root"
  },
  Mutation: {
    root: () => "root"
  }
};

/***/ }),

/***/ "9hFl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  RESTDataSource
} = __webpack_require__("pDpf"); // https://cabinquest.now.sh/bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss


class CabinQuestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://cabinquest.now.sh/";
  } // /:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss


  async getTree(xmlUrl) {
    const url = `bellwoods/trees/getTreeByRSSUrl/:xmlUrl?xmlUrl=http:%2F%2Fcabinporn.com%2Frss`;
    const data = this.get(url);
    const json = await data;
    console.log("data: ", json);
    return json;
  }

}

module.exports = CabinQuestAPI;

/***/ }),

/***/ "AB9L":
/***/ (function(module, exports, __webpack_require__) {

const ScoutAPI = __webpack_require__("ZWo+");

const CabinQuestAPI = __webpack_require__("9hFl");

module.exports = {
  ScoutAPI,
  CabinQuestAPI
};

/***/ }),

/***/ "BIwK":
/***/ (function(module, exports, __webpack_require__) {

const {
  gql
} = __webpack_require__("re1k");

module.exports = gql`
  type Branch {
    title: String
    summary: String
  }

  type Tree {
    branches: [Branch]
  }

  extend type Query {
    tree(xmlUrl: String!): Tree
  }
`;

/***/ }),

/***/ "Ep9V":
/***/ (function(module, exports) {

module.exports = require("micro-cors");

/***/ }),

/***/ "STh3":
/***/ (function(module, exports, __webpack_require__) {

const {
  gql
} = __webpack_require__("re1k");

module.exports = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

/***/ }),

/***/ "ZWo+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  RESTDataSource
} = __webpack_require__("pDpf");

class ScoutAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://scout.now.sh/api/";
  }

  willSendRequest(request) {
    if (request.body && typeof request.body === "object") {
      request.body = _objectSpread({}, request.body);
    }
  }

  async getGold(id) {
    return this.get(`gold/${id}`);
  }

  async getGolds(limit = 10) {
    const data = await this.get("gold");
    console.log(data);
    return data.golds;
  }

  async postGold(goldInput) {
    const data = await this.post("gold", goldInput);
    console.log("post gold response: ", data);
    return data;
  }

}

module.exports = ScoutAPI; // https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest

/***/ }),

/***/ "hide":
/***/ (function(module, exports) {

module.exports = {
  Query: {
    tree: async (_source, {
      xmlUrl
    }, {
      dataSources
    }) => {
      return dataSources.CabinQuestAPI.getTree(xmlUrl);
    }
  }
};

/***/ }),

/***/ "o4ya":
/***/ (function(module, exports, __webpack_require__) {

const cors = __webpack_require__("Ep9V")(); // highlight-line


const {
  ApolloServer,
  gql
} = __webpack_require__("re1k");

const {
  ScoutAPI
} = __webpack_require__("AB9L");

const {
  CabinQuestAPI
} = __webpack_require__("AB9L"); // root


const rootTypeDefs = __webpack_require__("STh3");

const rootResolvers = __webpack_require__("7IOu"); // tree


const treeTypeDefs = __webpack_require__("BIwK");

const treeResolvers = __webpack_require__("hide"); // gold


const goldTypeDefs = __webpack_require__("sf26");

const goldResolvers = __webpack_require__("6eC6");

const typeDefs = [rootTypeDefs, goldTypeDefs, treeTypeDefs];
const resolvers = [rootResolvers, goldResolvers, treeResolvers];

const dataSources = () => ({
  ScoutAPI: new ScoutAPI(),
  CabinQuestAPI: new CabinQuestAPI()
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  playground: true,
  introspection: true
});
const handler = apolloServer.createHandler({
  path: "/api"
});
module.exports = cors((req, res) => req.method === "OPTIONS" ? res.end() : handler(req, res));
/*
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api" });
*/

/***/ }),

/***/ "pDpf":
/***/ (function(module, exports) {

module.exports = require("apollo-datasource-rest");

/***/ }),

/***/ "re1k":
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "sf26":
/***/ (function(module, exports, __webpack_require__) {

/*
completed_on: null,
created_at: "Wed, 07 Oct 2020 21:35:07 GMT",
database_connection.Gold: 1,
gold_type: "common",
text: "hello world",
user_account_id: 1
*/
const {
  gql
} = __webpack_require__("re1k");

module.exports = gql`
  type Gold {
    gold_type: String
    text: String
    user_id: String
    created_at: String
  }

  input GoldInput {
    gold_type: String
    text: String
    user_id: String
  }

  type CreateGoldResponse {
    message: String
    status: Int
    gold: Gold
  }

  extend type Query {
    golds: [Gold]
  }

  extend type Mutation {
    createGold(goldInput: GoldInput!): CreateGoldResponse
  }
`;

/***/ })

/******/ });