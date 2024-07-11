const between2sets = (a, b) => {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every((el) => i % el === 0) && b.every((el) => el % i === 0)) {
        count++;
        }
    }
    return count;
    };