
const emitter = require('./emitter.js');
const names = require('./emitter-names.js');

const createLog = (event, payload) => {
  const time = new Date();
  console.log('------------------------------');
  console.log({time, event, payload});
};

emitter.on(names.getArguments, payload => {
  createLog(names.getArguments, payload);
});

emitter.on(names.readFile, payload => {
  createLog(names.readFile, payload);
});

emitter.on(names.upperCase, payload => {
  createLog(names.upperCase, payload);
});

emitter.on(names.writeFile, payload => {
  createLog(names.writeFile, payload);
});