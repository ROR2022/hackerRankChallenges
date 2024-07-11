function processDataOld(input) {
  //Enter your code here
  //la primera condicion es que todos los elementos de un
  //triplet son mayores a 0
  //la segunda condicion implica que la suma de los elementos de
  //cada triplet debe ser igual a "input"
  //la tercera condicion implica que la suma de los elementos
  //x,y o z de cada triplet tambien es igual a "input"

  let triplets = [];
  let totalTriplets = [];
  const n = Number(input);
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < (n-x); y++) {
      let z = n - x - y;
      totalTriplets.push([x, y, z]);
      if (x + y + z === n && z<n) {
        //console.log("agregando triplet:...", x, y, z);
        triplets.push([x, y, z]);
      }
    }
  }

  console.log(n);
  /**
   * Posible triplets
   * triplets.forEach((triplet) => {
    console.log(`${triplet[0]} ${triplet[1]} ${triplet[2]}`);
  });
   * 
   */
  // Encontrar la combinacion de triplets que cumpla con la condicion de que la suma de todos los elementos x,y,z sea igual a "input"

  const verifySum = (combination) => {
    //console.log("Verificando combinacion: ", combination);
    const sumX = combination.reduce((acc, triplet) => acc + triplet[0], 0);
    const sumY = combination.reduce((acc, triplet) => acc + triplet[1], 0);
    const sumZ = combination.reduce((acc, triplet) => acc + triplet[2], 0);
    return sumX === n && sumY === n && sumZ === n;
  }

    /* const findCombination = (triplets, totalTriplets, index, combination) => {
        if (index === totalTriplets.length) {
        if (verifySum(combination)) {
            console.log("Combinacion encontrada: ", combination);
            combination.forEach((triplet) => {
                console.log(`${triplet[0]} ${triplet[1]} ${triplet[2]}`);
              });
        }
        return;
        }
        findCombination(triplets, totalTriplets, index + 1, combination.concat([totalTriplets[index]]));
        findCombination(triplets, totalTriplets, index + 1, combination);
    }

    findCombination(triplets, totalTriplets, 0, []); */

    const findValidCombinations = (tripletsIn, combination=[]) => {
        if (combination.length === n) {
            if (verifySum(combination)) {
                console.log("Combinacion encontrada: ", combination);
                combination.forEach((triplet) => {
                    console.log(`${triplet[0]} ${triplet[1]} ${triplet[2]}`);
                });
            }
            return;
        }
        /* totalTriplets.forEach((triplet, index) => {
            findValidCombinations(totalTriplets.slice(index+1), combination.concat([triplet]));
        }); */
        for(let triplet of totalTriplets) {
            combination.push(triplet);
            findValidCombinations(tripletsIn, combination);
            combination.pop();
        }
    }

 //findValidCombinations(triplets, []);
 for (let i = 0; i < n; i++) {
    console.log(`${i} ${(i + 1) % n} ${(i + 2) % n}`);
}
  
}

function processData2(input) {
  //Enter your code here
  
  const n=input;
  

  /* let set = [];
    
    for (let i = 0; i < n; i++) {
        set.push([i, (i + 2) % n, (i + 4) % n]);
    }

    // Imprimir la cardinalidad del conjunto
    console.log(set.length);
    
    // Imprimir las tripletas
    set.forEach(triplet => {
        console.log(triplet.join(' '));
    }); */

    /**
     * debemos encontrar la combinacion de tripletas que cumpla con la condicion 
     * de que la suma de x+y+z de cada tripleta sea igual a "input"
     * tambien la suma de los elementos x,y o z de la combinacion de tripletas debe ser igual a "input"
     */
    //lo primero que debemos hacer es encontrar todas las tripletas posibles
    let triplets = [];
    for(let x = 0; x <= n; x++) {
        for(let y = 0; y <= (n - x); y++) {
            let z = n - x - y;
            triplets.push([x, y, z]);
        }
    }
    // ahora debemos encontrar la combinacion de tripletas que cumpla con la condicion
    // de que la suma de todas las x en la combinacion sea igual a "input"
    // la suma de todas las y en la combinacion sea igual a "input"
    // y la suma de todas las z en la combinacion sea igual a "input"

    const verifySum = (combination) => {
        console.log("Verificando combinacion: ", combination);
        const sumX = combination.reduce((acc, triplet) => acc + triplet[0], 0);
        const sumY = combination.reduce((acc, triplet) => acc + triplet[1], 0);
        const sumZ = combination.reduce((acc, triplet) => acc + triplet[2], 0);
        return sumX === n && sumY === n && sumZ === n;
    }

    //tomar en cuenta que la cantidad de tripletas en la combinacion es la cardinalidad de la combinacion
    //la cual no es igual a n sino la logitud de la combinacion que cumple con las condiciones

    //apartir de las combinaciones posibles de tripletas, encontrar la combinacion que cumpla con las condiciones

    const findCombination=(triplets, combination=[])=>{
        //se debe verificar si la combinacion cumple con las condiciones
        if(combination.length>0&&combination.length<=n){
            if(verifySum(combination)){
                console.log("Combinacion encontrada: ", combination);
                console.log("Cardinalidad de la combinacion: ", combination.length)
                combination.forEach((triplet) => {
                    console.log(`${triplet[0]} ${triplet[1]} ${triplet[2]}`);
                });
                return;
            }
        }
        
        //se debe iterar sobre todas las tripletas posibles
        for(let triplet of triplets){
            combination.push(triplet);
            findCombination(triplets, combination);
            combination.pop();
        }
    }

    console.log("Combinaciones posibles: ", triplets);
    findCombination(triplets, []);

}

function processData3(input) {
    //Enter your code here
    const n = Number(input);
    const tripletas = encontrarTripletasValidas(n);
    
    console.log(tripletas.length);
    tripletas.forEach(tripleta => {
        console.log(tripleta.join(" "));
    });
    
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});


function encontrarTripletasValidas(n) {
    const tripletas = [];

    console.log("Calculando para n: ", n);
    // Generamos todas las combinaciones posibles de tripletas
    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            const z = n - x - y;
            if (z >= 0) {
                tripletas.push([x, y, z]);
            }
        }
    }
    console.log("Tripletas posibles: ", tripletas);
    // Filtramos las tripletas válidas
    const tripletasValidas = tripletas.filter(([x, y, z]) => {
        return (x + y + z === n) && (sumarElementos(tripletas, 0) === n);
    });

    return tripletasValidas;
}

// Función auxiliar para sumar los elementos de un arreglo
function sumarElementos(arr, indice) {
    return arr.reduce((suma, elemento) => suma + elemento[indice], 0);
}

function processData(input) {
    let k = Math.floor(2*input/3+1)
    let x=[],y=[],z=[]
    console.log('Para n= ',input)
    console.log(`Cardinalidad: ${k} = n-3`)
    console.log('Tripletas:')
    for(let i = 0, j=Math.floor(input/3 + input%3); i < k; ++i, ++j){
        if((i+j)>input) j=(j+1)%2
        if(!x.includes(i) && !y.includes(j)){
          x.push(i)
          y.push(j)
          z.push(input-(i+j))
        }
    }
    for(let i = 0;i<x.length;i++){
      //console.log(x[i]," ",y[i]," ",z[i])
      console.log(`${x[i]} ${y[i]} ${z[i]}                    y=n-x-${z[i]}`)
    }
  } 