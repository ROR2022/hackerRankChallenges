const applesAndOranges = (s, t, a, b, apples, oranges) => {
    const appleCount = apples.filter(apple => a + apple >= s && a + apple <= t).length;
    const orangeCount = oranges.filter(orange => b + orange >= s && b + orange <= t).length;
    console.log(appleCount);
    console.log(orangeCount);
    }


    const s = 7;
    const t = 11;
    const a = 5;
    const b = 15;
    const apples = [-2, 2, 1];
    const oranges = [5, -6];
    applesAndOranges(s, t, a, b, apples, oranges);