var xal = require('../../xal-javascript');

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('> ');
rl.prompt();

rl.on('line', function (message) {
    xal.createEvent('xi.event.input.text', function(state, done) {
        state.put('xi.event.input.text', message);
        done(state);
    });
    rl.prompt();
});



xal.start({name: 'cli'}, function() {
});
