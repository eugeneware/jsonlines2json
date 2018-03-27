# jsonlines-2-json

Convert CRLF or New Line Delimited JSON into valid JSON

[![build status](https://secure.travis-ci.org/eugeneware/jsonlines2json.svg)](http://travis-ci.org/eugeneware/jsonlines2json)


## Motivation

Many online tools that deal with viewing and editing JSON don't work with
[New Line Delimited JSON](http://jsonlines.org/). This module is both a command
line tool as well as a module.

You can use this with [jqi](https://nire0510.github.io/jqi/) for example to
play with ND JSON or [JSON Data Ninja](http://www.jsondata.ninja/ninja.html)

## Installation

This module is installed via npm:

``` bash
$ npm i -g jsonlines2json
```

## Example Usage

### From the terminal

``` bash
$ cat test/fixtures/test.json
{"name": "Gilbert", "wins": [["straight", "7♣"], ["one pair", "10♥"]]}
{"name": "Alexa", "wins": [["two pair", "4♠"], ["two pair", "9♠"]]}
{"name": "May", "wins": []}
{"name": "Deloise", "wins": [["three of a kind", "5♣"]]}

$ cat test/fixtures/test.json | jsonlines2json
[{"name":"Gilbert","wins":[["straight","7♣"],["one pair","10♥"]]},{"name":"Alexa","wins":[["two pair","4♠"],["two pair","9♠"]]},{"name":"May","wins":[]},{"name":"Deloise","wins":[["three of a kind","5♣"]]}]
```

### As a module

``` js
const jsonlines2json = require('jsonlines2json');
const fs = require('fs');
const path = require('path');

fs.createReadStream(path.join(__dirname, 'fixtures', 'test.json'))
  .pipe(jsonlines2Json())
  .pipe(concat({ encoding: 'string' }, (data) => {
    console.log(data);
  }));
```
