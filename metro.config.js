//https://docs.expo.dev/versions/latest/sdk/sqlite/
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("db");

module.exports = defaultConfig;
