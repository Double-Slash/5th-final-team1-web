const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@common": path.resolve(__dirname, "../src", "common"),
  };

  return config;
};
