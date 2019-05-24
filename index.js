// Your code here
let saturdayFun = function(string= 'roller-skate') {
    return `This Saturday, I want to ${string}!`
}

const mondayWork = (str= "go to the office") => {
    return `This Monday, I will ${str}.`
}

let wrapAdjective = (mark= "*") => {
    return function(adj= "special") {
        return `You are ${mark}${adj}${mark}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    divide: function(a, b) {
        return a / b
    },
    multiply: function(a, b) {
        return a * b
    }
}

const actionApplyer = (a, array) => {
    array.forEach(el => a = el(a))
    return a
}