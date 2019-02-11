'USE STRICT'

var simpleArr = [1,2,3,4,5,6,7]
function square(x) {
    return x*x
}

function map(fun, arr) {


    var newArr = [];
    for (var i =0; i < simpleArr.length; i++) {
        newArr.push(square(simpleArr[i]))
    } console.log(newArr);

}

console.log(map(square(), simpleArr))
