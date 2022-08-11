//                     object   object    function
const doMiddlewareA = (request, response, next) => {
    console.log('Middleware A đã được chạy')
    next()
}

const doMiddlewareB = (request, response, next) => {
    console.log('Middleware B đã được chạy')
    next()
}

const doMiddlewareC = (request, response, next) => {
    console.log('Middleware C đã được chạy')
    next()
}

module.exports = [doMiddlewareA, doMiddlewareA, doMiddlewareA]