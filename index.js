// 1. Default arguments
const saturdayFun = (event = 'roller-skate') =>
{
  return `This Saturday, I want to ${event}!`  
}

// 2. Default params again
const mondayWork = (event = 'go to the office') =>
{
    return `This Monday, I will ${event}.`  
}

// 3. Scope chain
const wrapAdjective = (style="*") => {
    return (adjective="special") => {
      return `You are ${style}${adjective}${style}!`
    }
}

// 4. Define an object called Calculator
const Calculator = {
    add: (a,b) => {
      return a + b;
    },
    subtract: (a,b) => {
        return a - b;
    },
    multiply: (a,b) => {
        return a * b;
    },
    divide: (a,b) => {
        return a / b;
    }
}

const actionApplyer = (start, arr) => {
    let a = start
  
    for (let i = 0; i < arr.length; i++ ){
      a = arr[i](a)
    }
  
    return a
  }