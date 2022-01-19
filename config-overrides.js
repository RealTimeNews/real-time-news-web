const {
  addDecoratorsLegacy, // decorator를 사용할 수 있도록 config 설정.
  disableEsLint, // eslint를 끄는 것이 아님.
  override,
} = require("customize-cra");

module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy()),
};
