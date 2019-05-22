// Your code here
function saturdayFun(activity="roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function (activity="go to the office"){
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(style="*"){
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = { 
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }
}

const actionApplyer = (start, ray) => {
    let a = start

    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }

    return a
  } 
