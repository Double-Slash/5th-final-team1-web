const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@common": path.resolve(__dirname, "../src", "common"),
    "@component": path.resolve(__dirname, "../src", "component"),
    "@pages": path.resolve(__dirname, "../src", "pages"),
    "@utils": path.resolve(__dirname, "../src", "utils"),
  };

  return config;
};
