function saturdayFun(myActivity = "roller-skate") {
    return `This Saturday, I want to ${myActivity}!`
  }
  
  function mondayWork(myActivity = "go to the office") {
    return `This Monday, I will ${myActivity}.`
  }

  let wrapAdjective = function(highLight="*") {
    return function(myWord="special") {
      return `You are ${highLight}${myWord}${highLight}!`
    }
  }