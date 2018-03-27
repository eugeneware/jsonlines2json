const test = require('tape');
const jsonlines2json = require('..');
const fs = require('fs');
const path = require('path');
const concat = require('concat-stream');

test('should be able to turn crlf json to json', function(t) {
  fs.createReadStream(path.join(__dirname, 'fixtures', 'test.json'))
    .pipe(jsonlines2json())
    .pipe(concat({ encoding: 'string' }, (data) => {
      t.equal(data, '[{"name":"Gilbert","wins":[["straight","7♣"],["one pair","10♥"]]},{"name":"Alexa","wins":[["two pair","4♠"],["two pair","9♠"]]},{"name":"May","wins":[]},{"name":"Deloise","wins":[["three of a kind","5♣"]]}]');
      t.end();
    }));
});
