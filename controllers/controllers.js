
// Method controller

// cách viết method controller của js thuần
function a(request, response) {
    const data = {
        a: 'b',
        name: 'huy phung'
    }
    return response.json(data)
}

function b(request, response) {
    const data = {
        method: 'POST',
        name: 'huy phung'
    }
    return response.json(data)
}

// ES6+ syntax
const performCreate = function (request, response) {

}

const doSomething = (request, response) => {

}

module.exports = {a, b} //
// {
//     a: a,
//     b: b
// }