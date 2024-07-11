const bonAppetit = (bill, k, b) => {
    const total = bill.reduce((acc, curr) => acc + curr, 0);
    const actual = (total - bill[k]) / 2;
    
    return actual === b ? 'Bon Appetit' : b - actual;
    }