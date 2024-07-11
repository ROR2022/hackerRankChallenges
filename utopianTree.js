//primer intento fallido:
const utopianTree=(n)=> {
    // Write your code here
    console.log('data n: ', n);
    const sequence = [1, 2];
  for (let i = 2; i < n; i++) {
    //console.log('calculando para: ',i);
    const nextElement= sequence[i - 1] + sequence[i - 2] + (i % 2 === 0 ? 1 : 0)
    sequence.push(nextElement);
  }
  console.log('final sequence: ', sequence);
  let index = (n-1)>0?n-1:0;
  return sequence[index];

}


//crearemos una funcion que nos ayude a determinar el patron:
// 0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10,  11,  12...
// 1, 2, 3, 6, 7, 14, 15, 30, 31, 62, 63, 126, 127...

const utopianTree2= (n)=>{
    // dado el codigo n calcular la secuencia correcta
    const initSeq=[1,2];
    for(let i=2;i<=n;i++){
        let nextElement=null;
        if(i%2===0){
            nextElement=initSeq[i-1]+1;
        }else{
            nextElement=2*initSeq[i-1];
        }
        initSeq.push(nextElement);
    }
    
    //console.log('data n: ', n)
    //console.log('finalSeq: ', initSeq)
    return initSeq[n];
}




for(let i=0;i<10;i++){
    console.log(utopianTree2(i))
}