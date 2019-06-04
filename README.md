# Lab16 - Event Driven Application
Implements Access control through user roles and capabilities
### Author: Chris Kozlowski

### Links and Resources
* [Submission PR](https://github.com/401-advanced-javascript-cdk/lab14-access-control/pull/1)
<!-- * [Travis]( --- ) -->
<!-- * [Heroku Deployment]( --- ) -->

### Modules
#### `emitter.js`
Creates an instance of a new event emitter.
#### `app.js`
Holds event handlers for manipulating a text file and saving the new contents.
#### `emitter-names.js`
Holds event names to be used for increased type safety.
#### `logger.js`
Creates logs on the console for each event that triggers.

#### Operation
from the console, type `node app.js ./test.txt`.  An event handler will pull the file path from `process.argv` and emit a new event for reading a file.  Another event handler will receive this event with the filepath and read the contents of the file asynchronously, then pass the resulting data as text into another event to be transformed into all uppercase.  Finally another event is emitted with the data to a handler that will write the data to the same file that was passed in `process.argv` on the commandline.  Each step of the way, a logger will pick up each event and create a log to the console that contains the event name, the payload, and the time the event was triggered.