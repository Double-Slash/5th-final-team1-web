const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = () => {
  const isEnvDevelopment = process.env.NODE_ENV === "development";
  const isEnvProduction = process.env.NODE_ENV === "production";

  return {
    mode: isEnvDevelopment ? "development" : "production",
    devtool: isEnvDevelopment ? "inline-source-map" : "hidden-source-map",
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
      modules: [path.join(__dirname, "src"), "node_modules"],
      alias: {
        "@apis": path.resolve(__dirname, "src", "apis"),
        "@common": path.resolve(__dirname, "src", "common"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@pages": path.resolve(__dirname, "src", "pages"),
        "@static": path.resolve(__dirname, "src", "static"),
        "@store": path.resolve(__dirname, "src", "store"),
        "@utils": path.resolve(__dirname, "src", "utils"),
      },
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, "dist"),
      stats: "errors-warnings",
      overlay: true,
    },
    entry: path.join(__dirname, "src", "index"),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          exclude: path.join(__dirname, "node_modules"),
        },
        {
          test: /\.(ts|tsx)$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: !isEnvDevelopment,
            },
          },
          exclude: path.join(__dirname, "node_modules"),
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: "url-loader",
          options: {
            limit: 10000,
            outputPath: "static/media",
            name: "[name].[hash:8].[ext]",
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      isEnvDevelopment && new ReactRefreshWebpackPlugin(),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvDevelopment && new BundleAnalyzerPlugin({ analyzerMode: "server", openAnalyzer: false }),
      isEnvProduction && new BundleAnalyzerPlugin({ analyzerMode: "static" }),
      isEnvProduction && new webpack.LoaderOptionsPlugin({ minimize: true }),
      new webpack.EnvironmentPlugin({ NODE_ENV: isEnvDevelopment ? "development" : "production" }),
      new HtmlWebpackPlugin({
        inject: "body",
        template: path.join(__dirname, "public", "/index.html"),
      }),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: "./src/**/*.{ts,tsx,js,jsx}",
        },
      }),
    ].filter(Boolean),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].[hash:8].js",
      publicPath: "/",
    },
  };
};
