const beatiful3set= (data)=>{
    //determ cardinality of the set based on the amount of elements
    const n=Number(data); //amount of elements
    const o=Math.floor((n-1)/3); //offset
    const k=n-o;        //cardinality of the set
    
    //the cardinality of the set is the amount of triplets
    // 0<=x<=k-1
    //y=n-x-z
    
    let evenZ=[];
    let oddZ=[];

    //first we need to determine if n is in the set 4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55.....
    //create a function to determine if n is in the set
    const isNInSet=(num)=>{
        let temp= (num-1)/3;
        if(Number.isInteger(temp) && temp>=1){
            return true;
        }else{
            return false;
        }
    }
    let upperLimZ=0;
    let lowerLimZ=0;
    if(isNInSet(n)===true){
        //if n is in the set then
        upperLimZ=k;
        lowerLimZ=1;
    }else{
        //if n is not in the set then
        upperLimZ=k-1;
        lowerLimZ=0;
    }

    
    for(let c=upperLimZ;c>=lowerLimZ;c--){
        if(c%2===0){
            evenZ.push(c);
        }else{
            oddZ.push(c);
        }
    }

    //complete the set z 
    let completeZ=[];
    if(evenZ.length>=oddZ.length){
    completeZ=[...evenZ,...oddZ];
    }else{
    completeZ=[...oddZ,...evenZ];
    }
    
    let triplets=[];
    for(let x=0;x<k;x++){
            let z=completeZ[x];
            let y=n-x-z;
            triplets.push([x,y,z]);
        }
    //output
    console.log('Input n:',n);
    console.log('cardinality:',k);
    triplets.forEach(triplet=>{
        console.log(triplet.join(' '));
    });
}

for(let i=1;i<=4;i++){
    beatiful3set(i);
}