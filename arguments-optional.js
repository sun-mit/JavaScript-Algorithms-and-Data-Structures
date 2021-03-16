function addTogether() {
  // Function to check if a number is actually a number
  function checkNum(num) {
    return (typeof num === "number");
  };

  if (arguments.length === 2) {
    // Check if we have two arguments and if they are numbers
    // Return the sum if they are both numbers
    let first = arguments[0];
    let second = arguments[1];
    if (checkNum(first) && checkNum(second)) {
      return first + second;
    } else {
      return undefined;
    }
  } else if (arguments.length === 1) {
    // If only one argument was found, return a new function
    let first = arguments[0];
    if (checkNum(first)) {
      // Return function that expect a second argument.
      function addSecond(second) {
        // Check if the new argument is a number
        if (checkNum(second)) {
          return first + second;
        } else {
          return undefined;
        }
      };
      return addSecond;
    } else {
      return undefined;
    }
  } else {
    // Incorrect number of arguments found
    return undefined;
  }
}

// test here
addTogether(2, 3);