const climbingLeaderboard= (scores, alice) => {
    let uniqueScores = Array.from(new Set(scores));
    let aliceRank = [];
    let j = uniqueScores.length - 1;
    for (let i = 0; i < alice.length; i++) {
        while (alice[i] >= uniqueScores[j]) {
            j--;
        }
        aliceRank.push(j + 2);
    }
    return aliceRank;
}