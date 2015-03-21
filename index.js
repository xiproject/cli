var xal = require('../../xal-javascript'),
    _ = require('lodash');

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (message) {
    if (message.trim().length === 0) {
        rl.prompt();
        return;
    }
    xal.createEvent('xi.event.input.text', function(state, done) {
        state.put('xi.event.input.text', message);
        done(state);
    });
    rl.prompt();
});

xal.on('xi.event.output.text', function(state, done) {
    var value = _.reduce(state.get('xi.event.output.text'), function(memo, dest) {
        return memo || dest.value;
    }, false);

    console.log('\n<<< ', state.get('xi.event.id'), ': ', value);
    rl.prompt();
});

xal.on('xi.event.input.text', function(state, done) {
    var value = _.reduce(state.get('xi.event.input.text'), function(memo, dest) {
        return memo || dest.value;
    }, false);

    console.log(state.get('xi.event.id'), ' >>> ', value);
});


xal.start({name: 'cli'}, function() {
    rl.setPrompt('>>> ');
    rl.prompt();
});
