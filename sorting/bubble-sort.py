def bubble(nums):
    size = len(nums)
    for _ in nums:
        is_sorted = True
        print(nums)
        for i in range(size - 1):
            if nums[i] > nums[i + 1]:
                is_sorted = False
                nums[i + 1], nums[i] = nums[i], nums[i + 1]
        if is_sorted:
            return

bubble([5, 3, 2, 4, 1])
