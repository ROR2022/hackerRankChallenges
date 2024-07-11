const saveThePrisoner= (n, m, s)=>{
    let prisonerToBeWarned=0;
    let chair=s;
    for(let i=1;i<=m;i++){
        if(i===m){
            prisonerToBeWarned=chair
        }
        chair= (chair+1)<=n?chair+1:1;
    }
    return prisonerToBeWarned
}

//proponer una version mejor y mas rapida del codigo anterior
const saveThePrisoner2= (n, m, s)=>{
    // Calcular directamente la silla del prisionero a ser advertido
    let prisonerToBeWarned = (s + m - 1) % n;
    // Si el resultado es 0, significa que es el último prisionero (n)
    return prisonerToBeWarned === 0 ? n : prisonerToBeWarned;
}


//715950220 876882456 195550680

const n=715950220
const m=876882456
const s=195550680


console.log(saveThePrisoner2(n,m,s)) 


/**
 * 
 * s=2
 * 1 2 s-0  (n-s)+(i-1)-(0)n
 * 2 3 s+1  (n-s)+(i-1)-(0)n
 * 3 4 s+2  (n-s)+(i-1)-(0)n
 * 4 1 s-1  (n-s)+(i-1)-(1)n
 * 5 2 s-0  (n-s)+(i-1)-(1)n
 * 6 3 s+1  (n-s)+(i-1)-(1)n  (m-n)+(s-1) s+1
 * 
 * 7 4 s+2  (n-s)+(i-1)-(1)n
 * 8 1 s-1
 * 9 2 s-0
 * 
 * 
 * 
 * s=3
 * 1 3 s
 * 2 4 s+1
 * 3 1 s-2
 * 4 2 s-1
 * 5 3 s
 * 6 4 s+1   (m-n)+(s-1) s+1
 * 
 * 7 1 s-2
 * 8 2 s-1
 * 9 3 s
 * 
 * 
 * 
 * s=1
 * 1 1 s+0     //i-( (s-1)n + 1 )
 * 2 2 s+1     
 * 3 3 s+2
 * 4 4 s+3
 * 5 1 s+0     //i-( (s-1)n + 1 )
 * 6 2 s+1    (m-n)+(s-1) s+1
 * 
 * 7 3 s+2
 * 8 4 s+3
 * 9 1 s
 * 
 * 
 * 
 * s=4
 * 1 4
 * 2 1
 * 3 2
 * 4 3
 * 5 4
 * 6 1    s+1
 * 
 * 
 * 
 */