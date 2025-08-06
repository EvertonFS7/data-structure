function dailyTemperatures(temperatures) {
  const results = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temp) {
      const index = stack.pop();
      results[index] = i - index;
    }

    stack.push(i);
  }

  return results;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));