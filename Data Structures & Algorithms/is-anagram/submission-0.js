class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    sortString(str) {
        return str.split("").sort().join("");
    }
    isAnagram(s, t) {
        if (!s || !t || s.length !== t.length) return false;
        const sortedS = this.sortString(s);
        const sortedT = this.sortString(t);

        if (sortedS === sortedT) return true;
        return false;
    }
}
