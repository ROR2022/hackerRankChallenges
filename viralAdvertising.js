const viralAdvertising = (n)=>{
    let shared = 5;
    let liked = 2;
    let cumulative = 2;

    for(let i=2;i<=n;i++){
        shared = liked*3;
        liked = Math.floor(shared/2);
        cumulative += liked;
    }
    return cumulative;  
}

for(let i=1;i<6;i++){
    console.log('n: ', i, ' result: ', viralAdvertising(i));
}