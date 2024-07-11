const arrayTempFunc = (n,p) => {
    const libro=new Array(n+1).fill(0).map((_, i) => i);
    console.log('libro:',libro);
    console.log('page:',p);
    const totalTurns = Math.ceil(libro.length/2)-1;
    console.log('totalTurns:',totalTurns);
    const turnsAscending = Math.floor(p/2);
    const turnsDescending = totalTurns - turnsAscending;
    console.log('turnAscending:',turnsAscending);
    console.log('turnDescending:',turnsDescending);
    const result = Math.min(turnsAscending, turnsDescending);
    console.log('result:',result);
}

//arrayTempFunc(4,4); 

