// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = (wrapper = '*') => (meh = 'special') => `You are ${wrapper}${meh}${wrapper}!`;

const Calculator = {
  add(n1, n2) {
    return n1 + n2;
  },
  subtract(n1, n2) {
    return n1 - n2;
  },
  multiply(n1, n2) {
    return n1 * n2;
  },
  divide(n1, n2) {
    return n1 / n2;
  },
};

const actionApplyer = (int, functions) => {
  if (functions.length === 0) {
    return int;
  }
  return functions.reduce((prev, current) => current(prev), int);
};
