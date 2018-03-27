const JSONStream = require('JSONStream');
const combine = require('stream-combiner')
module.exports = function (open = '[', sep=',', close=']') {
  return combine(
    JSONStream.parse(),
    JSONStream.stringify(open, sep, close),
  );
};
