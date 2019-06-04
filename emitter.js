'use strict';

const EventEmitter = require('events');
const emitter = new EventEmitter();
const names = require('./emitter-names.js');

const fs = require('fs');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

emitter.on(names.getArguments, args => {
  let file = args.slice(2).shift();
  emitter.emit(names.readFile, file);
});

emitter.on(names.readFile, async file => {
  const data = await readFileAsync(file)
  emitter.emit(names.upperCase, data, file); 
});

emitter.on(names.upperCase, (data, file) => {
  let text = data.toString().toUpperCase();
  emitter.emit(names.writeFile, text, file);
});

emitter.on(names.writeFile, async (text, file) => {
  await writeFileAsync(file, Buffer.from(text));
  console.log(`${file} saved`);
})

emitter.emit(names.getArguments, process.argv);

module.exports = emitter;