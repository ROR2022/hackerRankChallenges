const pickingNumbers = (a) => {
    let max = 0;
    const count = a.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    for (let i = 0; i < a.length; i++) {
        max = Math.max(max, count[a[i]] + count[a[i] + 1] || count[a[i]]);
    }
    return max;
    }