class Middleware {
    constructor() {
        this.middlewares = [];
    }

    use(fn) {
        this.middlewares.push(fn);
    }
    executeMiddleware(middlewares, data, next)


}

module.exports = Middleware;