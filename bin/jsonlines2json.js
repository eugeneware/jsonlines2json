#!/usr/bin/env node
const ts = require('../index.js')();
process.stdin.pipe(ts).pipe(process.stdout);
process.stdin.on('close', () => process.exit(0));
