const missingNumber = function (nums) {
  let x = 0;

  for (let num of nums) {
    console.log('num', num);
    x ^= num;
  }

  for (let i = 0; i <= nums.length; i++) {
    console.log('i', i);
    x ^= i;
  }

  return x;
};

missingNumber([0, 1, 2, 4, 5])