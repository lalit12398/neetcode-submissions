class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(!strs || !strs.length) return []
        const map = {};
        /**
         * {
         *  sortedStr: [currStr, ....map[sortedStr]]
         * }
         */
        for (let i = 0; i < strs.length; i++) {
            const currStr = strs[i];
            const sortedCurrStr = currStr.split('').sort().join('');
            if (map[sortedCurrStr]) {
                map[sortedCurrStr] = [...map[sortedCurrStr], currStr];
            } else {
                map[sortedCurrStr] = [currStr];
            }
        }

        const result = Object.values(map)
        return result;
    }
}
