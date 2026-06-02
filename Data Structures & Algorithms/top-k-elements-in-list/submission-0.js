class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        //create map of {element : frequency of element}
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]] !== undefined) map[nums[i]] = map[nums[i]] + 1;
            else map[nums[i]] = 1;
        }

        //Sort object in Desc order and create array [[element, frequency]]
        const sortedMap = Object.entries(map).sort((a, b) => b[1] - a[1]);

        //prepare top K frequency elements
        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(sortedMap[i][0]);
        }
        return result;
    }
}
