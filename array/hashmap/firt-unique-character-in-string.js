class Solution {
  firstUniqChar(s) {
    const d = new Map();

    for (let idx = 0; idx < s.length; idx++) {
      const ch = s[idx];
      if (!d.has(ch)) {
        d.set(ch, [idx, 1]);
      } else {
        const val = d.get(ch);
        val[1] += 1;
        d.set(ch, val);
      }
    }

    for (const [ch, val] of d.entries()) {
      if (val[1] === 1) {
        return val[0]; 
      }
    }

    return -1; 
  }
}

const sol = new Solution();
console.log(sol.firstUniqChar("leetcode")); 
console.log(sol.firstUniqChar("loveleetcode")); 
console.log(sol.firstUniqChar("aabb")); 