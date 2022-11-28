/**
 * @type {import('@remix-run/dev').AppConfig}
 */

const { getDependenciesToBundle } = require("@remix-run/dev");


module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
