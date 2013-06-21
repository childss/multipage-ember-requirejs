var _ = require('lodash');

function AcceptHandler() {
    this.handlers = {};
}

AcceptHandler.prototype.accept = function(type, handlerFn) {
    this.handlers[type] = handlerFn;
    return this;
};

AcceptHandler.prototype.handle = function(request, response) {
    var accept = request.accepts(_.keys(this.handlers));
    if (_.has(this.handlers, accept)) {
        this.handlers[accept](request, response);
        return;
    }

    request.status(406);
};

module.exports = function() { return new AcceptHandler(); };