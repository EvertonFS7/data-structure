function bubble(nums) {
  const size = nums.length;

  for (let _ of nums) {
      let isSorted = true;

      console.log(nums);

      for (let i = 0; i < size - 1; i++) {
          if (nums[i] > nums[i + 1]) {
              [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
              isSorted = false;
          }
      }

      if (isSorted) {
          return;
      }
  }
}

bubble([5, 3, 2, 4, 1]);
