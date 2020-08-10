"use strict";

const convict = require("convict");
const path = require("path");

const getConfig = (env) => {
  const config = convict({
    env: {
      doc: "The application environment.",
      format: ["prod", "local"],
      default: "local",
      env: "NODE_ENV",
    },
    port: {
      doc: "Port to bind.",
      format: "port",
      default: 4000,
      env: "PORT",
    },
    scout: {
      baseURL: "https://www.scout.now.sh",
    },
  });

  // Load environment dependent configuration
  env = env || config.get("env");
  try {
    config.loadFile(path.join(__dirname, "./envs/" + env + ".json"));
  } catch (error) {
    console.error({
      error,
      message: `Unable to override config with ${env}.json`,
    });
  }
  // Perform validation
  config.validate({ allowed: "strict" });
  return config;
};

module.exports = getConfig;
