const EventEmitter = require('events');

// Create emitter object
const eventEmitter = new EventEmitter();

// Listener 1
eventEmitter.on('userLogin', (username) => {
    console.log(`Listener 1: ${username} has logged in.`);
});

// Listener 2 (same event)
eventEmitter.on('userLogin', (username) => {
    console.log(`Listener 2: Welcome ${username}!`);
});

// Another event
eventEmitter.on('fileUpload', (filename) => {
    console.log(`File uploaded: ${filename}`);
});

// Async listener (to show event-driven behavior)
eventEmitter.on('asyncTask', (taskName) => {
    setTimeout(() => {
        console.log(`Async task completed: ${taskName}`);
    }, 2000);
});

// Emit events (trigger them)
console.log("Starting event execution...\n");

eventEmitter.emit('userLogin', 'Ganesh');

eventEmitter.emit('fileUpload', 'report.pdf');

eventEmitter.emit('asyncTask', 'Data Processing');

console.log("\nEvents triggered. Waiting for async tasks...");