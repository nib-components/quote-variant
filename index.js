var cookie = require('component-cookie');

function QuoteVariant(options) {
  options = options || {};
  this.cookieName = options.cookieName || 'ProductPageVariant';
}

QuoteVariant.prototype.get = function () {
  var pageVarient = cookie(this.cookieName);
  return pageVarient;
};

QuoteVariant.prototype.isQuoteV1 = function () {
  var pageVarient = this.get();
  return pageVarient === 'Detail';
};

QuoteVariant.prototype.isQuoteV2 = function () {
  var pageVarient = this.get();
  return pageVarient === 'QuoteV2';
};

QuoteVariant.prototype.isKickstarter = function () {
  var pageVarient = this.get();
  return pageVarient === 'Kickstarter';
};

module.exports = QuoteVariant;