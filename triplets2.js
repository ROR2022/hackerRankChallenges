/* function processData(input) {
    const n = parseInt(input);

    // Función para encontrar todas las tripletas válidas
    function findBeautifulSet(n) {
        let triplets = [];

        // Generar todas las combinaciones posibles de (x, y, z) donde x + y + z = n
        for (let x = 0; x <= n; x++) {
            for (let y = 0; y <= n; y++) {
                let z = n - (x + y);
                if (z >= 0) {
                    triplets.push([x, y, z]);
                }
            }
        }

        return triplets;
    }

    // Función para verificar y retornar las combinaciones válidas
    function getValidTripletsOld(n) {
        let allTriplets = findBeautifulSet(n);
        console.log(allTriplets);
        let validTriplets = [];

        // Verificar todas las combinaciones posibles
        for (let triplet of allTriplets) {
            let xSum = triplet.reduce((acc, [x, _, __]) => acc + x, 0);
            let ySum = triplet.reduce((acc, [_, y, __]) => acc + y, 0);
            let zSum = triplet.reduce((acc, [_, __, z]) => acc + z, 0);

            if (xSum === n && ySum === n && zSum === n) {
                validTriplets.push(triplet);
            }
        }

        return validTriplets;
    }
    function getValidTriplets(n) {
        let allTriplets = findBeautifulSet(n);
        let validTriplets = [];
        let xSum = Array(n).fill(0);
        let ySum = Array(n).fill(0);
        let zSum = Array(n).fill(0);

        console.log('Datos iniciales:');
        console.log('allTriplets:', allTriplets);
        console.log('xSum:', xSum);
        console.log('ySum:', ySum);
        console.log('zSum:', zSum);
        
        // Verificar todas las combinaciones posibles
        for (let triplet of allTriplets) {
            console.log('analizando triplet:', triplet);
            let [x, y, z] = triplet;
            xSum[x]++;
            ySum[y]++;
            zSum[z]++;
            if (xSum.reduce((acc, cur) => acc + cur) === n &&
                ySum.reduce((acc, cur) => acc + cur) === n &&
                zSum.reduce((acc, cur) => acc + cur) === n) {
                validTriplets.push(triplet);
                if (validTriplets.length === n) break;
            }
        }
        
        return validTriplets;
    }

    // Obtener las tripletas válidas
    console.log('Dato de entrada (n):',n);
    let validTriplets = getValidTriplets(n);
    console.log(validTriplets.length);
    for (let [x, y, z] of validTriplets) {
        console.log(`${x} ${y} ${z}`);
    }
} */

// Pruebas con diferentes valores de n
/* processData("2"); // Esperado: 2 tripletas
processData("3"); // Esperado: 3 tripletas
processData("4"); // Esperado: 3 tripletas
processData("5"); // Esperado: 4 tripletas
processData("6"); // Esperado: 5 tripletas
processData("7"); // Esperado: 5 tripletas */


/* function processData(input) {
    const k = Math.floor(2 * input / 3 + 1);
    const result = [];

    for (let i = 0, j = Math.floor(input / 3 + input % 3); i < k; ++i, ++j) {
        if ((i + j) > input) j = (j + 1) % 2;
        if (!result.some(([x,y,z]) => x === i && y === j)) {
            result.push({ x: i, y: j, z: input - (i + j) });
        }
    }

    console.log('Dato de entrada n:',input);
    console.log(result.length);
    result.forEach(item => {
        console.log(`${item.x} ${item.y} ${item.z}`);
    });
} */

/* processData("2"); // Esperado: 2 tripletas
processData("3"); // Esperado: 3 tripletas
processData("4"); // Esperado: 3 tripletas
processData("5"); // Esperado: 4 tripletas
processData("6"); // Esperado: 5 tripletas
processData("7"); // Esperado: 5 tripletas */


function processDataYash(input) {
    //const input = parseInt(prompt("Enter a number:").trim(), 10);
    const k = Math.floor(2 * input / 3) + 1;
    console.log("Dato de entrada n:",input);
    console.log(k);

    const y = 2 * k - input;
    const x = input - 2 * y;

    for (let i = 0; i <= y; i++) {
        console.log(`${i} ${x + i} ${input - x - 2 * i}`);
    }

    for (let i = 0; i < k - y; i++) {
        console.log(`${y + i + 1} ${i} ${input - y - 1 - 2 * i}`);
    }
}

//processDataYash("2");
//processDataYash("3");
//processDataYash("4");

/* function processDataY2(input) {
    const n = parseInt(input.trim(), 10);
    const k = Math.floor((2 * n) / 3);
    console.log("Dato de entrada n:",n);
    console.log('Cardinalidad: ',k + 1);
    const y = 2 * k - n;
    const x = n - 2 * y;

    for (let i = 0; i <= y; i++) {
        console.log(`${i} ${x + i} ${n - x - 2 * i}`);
    }
    for (let i = 0; i < k - y; i++) {
        console.log(`${y + i + 1} ${i} ${n - y - 1 - 2 * i}`);
    }
} */

// Ejemplo de uso con input
//const input = "7"; // Aquí puedes cambiar el valor de n para probar
/* processDataY2("2");
processDataY2("3");
processDataY2("4");
processDataY2("5");
processDataY2("6");
processDataY2("7"); */


function processData(input) {
    let k = Math.floor(2*input/3+1)
    let x=[],y=[],z=[]
    console.log("Dato de entrada n:",input);
    console.log(k)
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
      console.log(`${x[i]} ${y[i]} ${z[i]}`)
    }
  } 

  processData("2"); // Esperado: 2 tripletas
processData("3"); // Esperado: 3 tripletas
processData("4"); // Esperado: 3 tripletas
processData("5"); // Esperado: 4 tripletas
processData("6"); // Esperado: 5 tripletas
processData("7"); // Esperado: 5 tripletas