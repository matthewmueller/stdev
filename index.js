/**
 * Export `stdev`
 */

module.exports = stdev;

/**
 * Compute the standard deviation
 *
 * @param {Array} arr
 * @return {Number}
 * @api public
 */

function stdev(arr) {
  if (!arr.length) return null;
  return Math.sqrt(variance(arr));
}

/**
 * Compute the variance
 *
 * @param {Array} arr
 * @return {Number}
 * @api private
 */

function variance(arr) {
  var m = mean(arr);
  var d = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    d.push(Math.pow(arr[i] - m, 2));
  };

  return mean(d);
}

/**
 * Compute the mean
 *
 * @param {Array} arr
 * @return {Number}
 * @api private
 */

function mean(arr) {
  var sum = 0;
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    sum += arr[i];
  };

  return sum / len;
}
