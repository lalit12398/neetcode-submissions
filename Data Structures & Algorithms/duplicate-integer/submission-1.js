class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums || !Array.isArray(nums) || !nums.length) {
            return false
        }
        const tempNumsObj = {}
        for(let i = 0; i< nums.length; i++) {
            const stringifiedVal = nums[i]
            if(tempNumsObj[stringifiedVal] !== undefined) return true;
            tempNumsObj[stringifiedVal] = true
        }
        return false
    }
}
