var sinon        = require('sinon');
var assert       = require('assert');
var QuoteVariant = require('../');

describe('Quote variant', function() {
  describe('Constructor', function() {
    it('Should use custom cookie name', function () {
      var options = {
        cookieName: 'James'
      };
      var quoteVariant = new QuoteVariant(options);
      assert.equal(quoteVariant.cookieName, 'James');
    });
  });

  describe('.isQuoteV1', function() {
    it('Should return true when quote V1', function () {
      var quoteVariant = new QuoteVariant();
      quoteVariant.get = sinon.stub().returns('QuoteV1');
      assert(quoteVariant.isQuoteV1());
    });

    it('Should not return true when not quote V1', function () {
      var quoteVariant = new QuoteVariant();
      quoteVariant.get = sinon.stub().returns('Matt');
      assert(!quoteVariant.isQuoteV1());
    });
  });

  describe('.isQuoteV2', function() {
    it('Should return true when quote V2', function () {
      var quoteVariant = new QuoteVariant();
      quoteVariant.get = sinon.stub().returns('QuoteV2');
      assert(quoteVariant.isQuoteV2());
    });

    it('Should not return true when not quote V2', function () {
      var quoteVariant = new QuoteVariant();
      quoteVariant.get = sinon.stub().returns('Matt');
      assert(!quoteVariant.isQuoteV2());
    });
  });

  describe('.isKickstarter', function() {
    it('Should return true when Kickstarter', function () {
      var quoteVariant = new QuoteVariant();
      quoteVariant.get = sinon.stub().returns('Kickstarter');
      assert(quoteVariant.isKickstarter());
    });

    it('Should not return true when not Kickstarter', function () {
      var quoteVariant = new QuoteVariant();
      quoteVariant.get = sinon.stub().returns('Matt');
      assert(!quoteVariant.isKickstarter());
    });
  });
});