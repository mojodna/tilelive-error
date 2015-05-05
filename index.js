"use strict";

module.exports = function() {
  var TileliveError = function(error, callback) {
    this.error = error;

    return setImmediate(callback, null, this);
  };

  TileliveError.prototype.close = function(callback) {
    return callback && setImmediate(callback);
  };

  TileliveError.prototype.getGrid = function(z, x, y, callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.prototype.getInfo = function(callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.prototype.getTile = function(z, x, y, callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.prototype.putGrid = function(z, x, y, data, callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.prototype.putInfo = function(info, callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.prototype.putTile = function(z, x, y, data, callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.prototype.startWriting = function(callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.prototype.stopWriting = function(callback) {
    return setImmediate(callback, this.error);
  };

  TileliveError.registerProtocols = function() {
    // noop
  };

  return TileliveError;
};
