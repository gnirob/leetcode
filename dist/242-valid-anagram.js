const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const charCodeStart = 'a'.charCodeAt(0);
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        counts[s[i].charCodeAt(0) - charCodeStart]++;
        counts[t[i].charCodeAt(0) - charCodeStart]--;
    }
    return counts.every((count) => count === 0);
};
