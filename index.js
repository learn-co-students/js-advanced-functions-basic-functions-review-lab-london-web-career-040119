function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`
  }
}

let Calculator = {
  add: function(x, y) {
    return x + y
  },
  subtract: function(x, y) {
    return x - y
  },
  multiply: function(x, y) {
    return x * y
  },
  divide: function(x, y) {
    return x / y
  }
}

function actionApplyer(base, functionsArray) {
  if (functionsArray.length < 1) {
    return base
  } else {
    for (var i = 0; i < functionsArray.length; ++i) {
      base = functionsArray[i](base)
    }
    return base
  }
}
