const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@apis": path.resolve(__dirname, "../src", "apis"),
    "@common": path.resolve(__dirname, "../src", "common"),
    "@components": path.resolve(__dirname, "../src", "components"),
    "@hooks": path.resolve(__dirname, "../src", "hooks"),
    "@pages": path.resolve(__dirname, "../src", "pages"),
    "@static": path.resolve(__dirname, "../src", "static"),
    "@store": path.resolve(__dirname, "../src", "store"),
    "@typings": path.resolve(__dirname, "../src", "typings"),
    "@utils": path.resolve(__dirname, "../src", "utils"),
  };

  return config;
};
