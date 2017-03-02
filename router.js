module.exports = {
    'GET /': require('./app/root.js'),
    'GET /style.css': require('./app/css.js'),
    'GET /app/fun.js': require('./app/main.js'),
    'POST /display': require('./app/sender.js'),
    'POST /display': require('./app/display.js'),
};
