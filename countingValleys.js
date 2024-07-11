const countingValleys = (steps, path) => {
    let valleys = 0;
    let level = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            level++;
        } else {
            if (level === 0) {
                valleys++;
            }
            level--;
        }
    }
    return valleys;
};


const tempFunc= (arrA,arrB,m)=>{
    let res=-1;
    for(let i=0;i<arrA.length;i++){
        for(let j=0;j<arrB.length;j++){
            const tempSum=arrA[i]+arrB[j];
            if(tempSum<=m){
                res=Math.max(res,tempSum);
            }
        }
    }
    return res;
}