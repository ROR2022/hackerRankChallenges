const formingMagicSquare = (s) => {
  const allMagicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity;
  for (let i = 0; i < allMagicSquares.length; i++) {
    let cost = 0;
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        cost += Math.abs(s[j][k] - allMagicSquares[i][j][k]);
      }
    }
    minCost = Math.min(minCost, cost);
  }

  return minCost;
};

// para determinar si es un cuadrado mágico
// todas las filas, columnas y diagonales suman lo mismo (15)
// todas las matrizes se construyen asi:
/**
 *
 *     x1 y1 z1
 *     x2 y2 z2
 *     x3 y3 z3
 *
 *     x1,z1,x3,z3 son numeros pares
 *      (0,0),(0,2),(2,0),(2,2)
 *     el resto son impares
 *     el rango de los numeros es de 1 a 9
 *     todos los pares en ese rango son: 2,4,6,8
 *     todos los impares en ese rango son: 1,3,5,7,9
 *
 *     algo importante tambien es que los numeros no se repiten en la matriz
 *
 *     otro punto importante es que en todos los cuadros magicos
 *     el elemento central es 5 siempre
 *
 */

/***
 *      Por lo tanto, para determinar si una matriz es un cuadrado mágico,
 *      se puede comparar con todas las matrices posibles y ver cual es la que
 *      tiene el menor costo, es decir, la que tiene la menor diferencia entre
 *      los elementos de la matriz original y la matriz que se compara
 *
 *      Para la primera fila de cada matriz, se debe seguir la regla:
 *      x1 debe ser un numero par, y1 debe ser un numero impar, z1 debe ser un numero par
 *      y ademas deben sumar 15
 *
 *      Para la segunda fila de cada matriz, se debe seguir la regla:
 *      x2 debe ser un numero impar, y2 debe ser un numero impar, z2 debe ser un numero impar
 *      y ademas deben sumar 15
 *
 *
 *      Para la tercera fila de cada matriz, se debe seguir la regla:
 *      x3 debe ser un numero par, y3 debe ser un numero impar, z3 debe ser un numero par
 *      y ademas deben sumar 15
 *
 *
 *
 *   por ejemplo, para la matriz:
 *
 *     5 3 4      8 3 4     el costo en esta linea es: 5-8= 3
 *     1 5 8      1 5 9     el costo en esta linea es: 8-9= 1   el total es 7
 *     6 4 2      6 7 2     el costo en esta linea es: 4-7= 3
 *
 *
 */

// por lo tanto una vez que se se recibe como dato la matriz s
// se debe determinar cual es el numero(s) en cada linea que se debe cambiar siguiendo las reglas
// establecidas para que la matriz s sea un cuadrado mágico

const myMagicSquare = (s) => {
  //vamos a separar la matriz en filas
  const row1 = s[0];
  const row2 = s[1];
  const row3 = s[2];
  const x1 = row1[0];
  const y1 = row1[1];
  const z1 = row1[2];
  const x2 = row2[0];
  const y2 = row2[1];
  const z2 = row2[2];
  const x3 = row3[0];
  const y3 = row3[1];
  const z3 = row3[2];
  //ahora debemos analizar cada fila
  //ya que la primera fila debe ser par, impar, par
  //la segunda fila debe ser impar, impar, impar
  //la tercera fila debe ser par, impar, par
  //y todas las filas deben sumar 15

  //para la primera fila
  //determinar cual o cuales numeros deben ser cambiados
  //para que la suma de la fila sea 15 y cumpla con las reglas

  //para saber si row1[0] es par o impar se puede hacer lo siguiente
  //si row1[0] es par, row1[0]%2===0

  const dataRow1 = [x1 % 2 === 0, y1 % 2 !== 0, z1 % 2 === 0];
  const dataRow2 = [x2 % 2 !== 0, y2 % 2 !== 0, z2 % 2 !== 0];
  const dataRow3 = [x3 % 2 === 0, y3 % 2 !== 0, z3 % 2 === 0];

  //crearemos una matriz temporal
  const tempMatrix = [[], [], []];

  const isCornerFunc = (row, col) => {
    return (
      (row === 0 && col === 0) ||
      (row === 0 && col === 2) ||
      (row === 2 && col === 0) ||
      (row === 2 && col === 2)
    );
  };

  //de acuerdo con las reglas establecidas para una matriz mágica correjiremos los valores
  //haciendo un recorrido de la matriz original

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const value = s[row][col];
      //determinar si el valor esta en una esquina (0,0),(0,2),(2,0),(2,2)
      const isCorner = isCornerFunc(row, col);
      //si es asi, el valor debe ser par
      if (isCorner) {
        if (value % 2 !== 0) {
          //si no es par, se debe cambiar
          //pero ademas se debe cambiar por un valor que no se repita en la matriz
          //y si col = 2 entoces se dependera de la suma de la fila
          if (col === 2) {
            tempMatrix[row][col] =
              15 - (tempMatrix[row][0] + tempMatrix[row][1]);
          } else {
            //esto significa que es el primer valor de la fila
            //por lo tanto se debe cambiar por un valor par que no se repita en la matriz
            const possibleValues = [2, 4, 6, 8];
            for (let i = 0; i < possibleValues.length; i++) {
              if (!tempMatrix.flat().includes(possibleValues[i])) {
                tempMatrix[row][col] = possibleValues[i];
                break;
              }
            }
          }
        } else {
          //si es par,
          //si es el primer valor de la fila col=0
          //verificamos primero que no se encuentre ya en la matriz
          const isValueInMatrix = tempMatrix.flat().includes(value);
          if (col === 0) {
            if (isValueInMatrix) {
              //si esta en la matriz, se debe cambiar por un valor par que no se repita
              const possibleValues = [2, 4, 6, 8];
              for (let i = 0; i < possibleValues.length; i++) {
                if (!s.flat().includes(possibleValues[i])) {
                  tempMatrix[row][col] = possibleValues[i];
                  break;
                }
              }
            } else {
              //si no esta en la matriz, se deja igual
              tempMatrix[row][col] = value;
            }
          } else {
            //entonces depende de la suma de la fila
            tempMatrix[row][col] =
              15 - (tempMatrix[row][0] + tempMatrix[row][1]);
          }
        }
      } else {
        //verificamos que no se trate del elemento central
        if (row === 1 && col === 1) {
          //si es el elemento central
          tempMatrix[row][col] = 5;
        } else {
          //el valor debe ser impar
          if (value % 2 === 0) {
            //si no es impar, se debe cambiar
            const isValueInMatrix = tempMatrix.flat().includes(value);
            //si row =0 significa que es el primer valor impar en la matriz
            if (row === 0) {
              //por lo que su valor puede ser 1,3,7,9
              //aqui es donde se debe determinar cual es el numero mas cercano al actual
              const possibleValues = [1, 3, 7, 9];
              let minDiff = Infinity;
              let newValue = 0;
              for (let i = 0; i < possibleValues.length; i++) {
                const diff = Math.abs(value - possibleValues[i]);
                if (diff < minDiff) {
                  minDiff = diff;
                  newValue = possibleValues[i];
                }
              }
              tempMatrix[row][col] = newValue;
            } else {
              if (row === 2) {
                tempMatrix[row][col] = 15 - (tempMatrix[0][1] + 5);
              } else {
                if (col === 0) {
                  //esto implica que el valor posible puede ser 1,3,7,9
                  //que no se repita en la matriz
                  //y que sea el mas cercano al valor actual
                  const possibleValues = [1, 3, 7, 9];
                  let minDiff = Infinity;
                  let newValue = 0;
                  for (let i = 0; i < possibleValues.length; i++) {
                    const diff = Math.abs(value - possibleValues[i]);
                    if (diff < minDiff) {
                      minDiff = diff;
                      newValue = possibleValues[i];
                    }
                  }
                  tempMatrix[row][col] = newValue;
                } else {
                  //este valor se determina por la suma de la fila
                  tempMatrix[row][col] =
                    15 - (tempMatrix[row][0] + tempMatrix[row][1]);
                }
              }
            }
          } else {
            //si es impar,
          }
        }
      }
    }
  }
};

//tratemos de analizar la formula que deben seguir los valores de la matriz
//para que sea un cuadrado magico

const findMinValueInPossibleValues = (value, possibleValues) => {
  let minDiff = Infinity;
  let newValue = 0;
  for (let i = 0; i < possibleValues.length; i++) {
    const diff = Math.abs(value - possibleValues[i]);
    if (diff < minDiff) {
      minDiff = diff;
      newValue = possibleValues[i];
    }
  }
  return newValue;
};

/***
 *
 * Para x1 esta condicionado a ser un numero par y ser el mas cercano a su valor actual
 * entonces los posibles valores son 2,4,6,8
 * const posEvenValues = [2, 4, 6, 8];
 * x1= findMinValueInPossibleValues(x1,posEvenValues);
 *
 * para y1 esta condicionado a ser un numero impar y ser el mas cercano a su valor actual
 * entonces los posibles valores son 1,3,7,9
 * const posOddValues = [1, 3, 7, 9];
 * y1= findMinValueInPossibleValues(y1,posOddValues);
 *
 * para z1 esta condicionado al total que es 15 y los valores de x1 y y1
 * z1=15-(x1+y1);
 *
 * para x2 esta condicionado a ser un numero impar y ser el mas cercano a su valor actual
 * y ser diferente a y1
 * const filterOddValues = [1, 3, 7, 9].filter((value)=>value!==y1);
 * x2= findMinValueInPossibleValues(x2,filterOddValues);
 *
 * y2=5;
 *
 * z2=15-(x2+y2);
 *
 * para x3 esta condicionado a ser un numero par y ser el mas cercano a su valor actual
 * entonces los posibles valores son 2,4,6,8
 * se deben filtrar los valores que ya estan en la matriz x1 y z1
 * const filterEvenValues = [2, 4, 6, 8].filter((value)=>value!==x1&&value!==z1);
 * x3= findMinValueInPossibleValues(x3,filterEvenValues);
 *
 * para y3 esta condicionado a ser un numero impar y ser el mas cercano a su valor actual
 * entonces los posibles valores son 1,3,7,9
 * se deben filtrar los valores que ya estan en la matriz y1, x2, y2, z2
 * const filterOddValues = [1, 3, 7, 9].filter((value)=>value!==y1&&value!==x2&&value!==y2&&value!==z2);
 * y3= findMinValueInPossibleValues(y3,filterOddValues);
 *
 * z3=15-(x3+y3);
 *
 *
 */

const firstProposedSolution = (s) => {
  //console.log("initS(inicio):", s);

  const calulateCost = (valInMat, internalS, initCost) => {
    let newS = [[], [], []];
    const posEvenValues = [2, 4, 6, 8];
    const posOddValues = [1, 3, 7, 9];
    let valuesInMatrix = [...valInMat];
    let internalCost = initCost;

    const findMinValueInPossibleValues = (value, possibleValues) => {
      let minDiff = Infinity;
      let newValue = 0;
      for (let i = 0; i < possibleValues.length; i++) {
        const diff = Math.abs(value - possibleValues[i]);
        if (diff < minDiff) {
          minDiff = diff;
          newValue = possibleValues[i];
        }
      }
      return newValue;
    };

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let newValue = null;
        let actual = internalS[row][col];
        if (row === col && row === 1) {
          newValue = 5;
        }
        if (col === 2) {
          newValue = 15 - (newS[row][0] + newS[row][1]);
        }
        if (row === 2) {
          newValue = 15 - (newS[0][col] + newS[1][col]);
        }
        if (newValue === null && row === 0 && col === 0) {
          const actual = internalS[0][0];
          if (actual % 2 !== 0) {
            let filterPosValues = [];
            filterPosValues = [...posEvenValues];
            newValue = findMinValueInPossibleValues(actual, filterPosValues);
          } else {
            newValue = actual;
          }
        }
        if (newValue === null && row === 0 && col === 1) {
          const actual = internalS[0][1];
          let filterOddValues = [];  
            let tempValInMat = [...valuesInMatrix];
            filterOddValues = posOddValues.filter((val) => {
              const isFound = tempValInMat.includes(val);
              return !isFound;
            });
            //tambien se deben filtrar los valores que al sumarlos sean >15
            filterOddValues = filterOddValues.filter((val) => {
              const tempSum = val + newS[0][0];
              return tempSum < 15;
            });
            //por ultimo filtramos los valores que sean 0
            filterOddValues = filterOddValues.filter((val) => val !== 0);
            //tambien se debe filtrar que: sum=15-(val+valX1)
            //el valor de sum debe ser diferente a valX1
            filterOddValues = filterOddValues.filter((val) => {
              const tempSum = 15 - (val + newS[0][0]);
              return tempSum !== newS[0][0];
            });
            //console.log('primer filtro2:',filterOddValues);
            newValue = findMinValueInPossibleValues(actual, filterOddValues);
          if (valuesInMatrix.length < 4) {
            if (!valuesInMatrix.includes(newValue)) {
              valuesInMatrix.push(newValue);
            }
          }
        }
        if (newValue === null && row === 1 && col === 0) {
          const actual = internalS[1][0];
          const valY1 = newS[0][1];
          const valX1 = newS[0][0];
          let filterOddValues = posOddValues.filter((val) => val !== valY1);
          if (valX1 < 5) {
            filterOddValues = filterOddValues.filter((val) => val !== 1);
            if (valX1 < 3) {
              filterOddValues = filterOddValues.filter((val) => val !== 3);
            }
          }
          filterOddValues = filterOddValues.filter((val) => {
            //console.log('filtrando val:',val, valY1);
            const notPos = 15 - (valY1 + 5);
            return val !== notPos;
          });
          //ahora agregamos un filtro para evitar los valores que x1 + x2 = 15

          filterOddValues = filterOddValues.filter((val) => {
            const tempSum = val + valX1;
            return tempSum < 15;
          });

          filterOddValues = filterOddValues.filter((val) => {
            const notPos = 15 - (val + valX1);
            let tempList = [valY1, 5, valX1];
            return !tempList.includes(notPos);
          });
          //console.log('nuevo filtro:', filterOddValues);
          //console.log("filter pos X2 values:", filterOddValues);
          newValue = findMinValueInPossibleValues(actual, filterOddValues);
        }
        newS[row][col] = newValue;
        const partialCost = Math.abs(actual - newValue);
        internalCost += partialCost;
      }
    }

    return {
      newS,
      internalCost,
      valuesInMatrix,
    };
  };

  //se hace el calculo para cuando no se tiene valores en la matriz

  let valMinArray = [];
  let posValX1 = [2, 4, 6, 8];
  let posFinalS = [];

  //haremos un ciclo para calcular el costo de la matriz para cada caso
  //contemplaremos tambien todos los casos posibles de los valores de x1
  for (let j = 0; j < posValX1.length; j++) {
    const tempInitCost = Math.abs(s[0][0] - posValX1[j]);
    const tempS = [[...s[0]], [...s[1]], [...s[2]]];
    tempS[0][0] = posValX1[j];

    let initValMatrix = [];
    for (let i = 0; i < 4; i++) {
      const firstCost = calulateCost(initValMatrix, tempS, tempInitCost);
      initValMatrix = firstCost.valuesInMatrix;
      valMinArray.push(firstCost.internalCost);
      posFinalS.push(firstCost.newS);
      //console.log("dataCost:", firstCost);
    }
  }

  let minCost = Math.min(...valMinArray);
  const indexMin = valMinArray.indexOf(minCost);
  const finalS = posFinalS[indexMin];
  console.log("initS:", s);
  console.log("finalS:", finalS);

  return minCost;
};

/**
 * 
 * 
4 8 2
4 5 7
6 1 6
 * 
 * 
 * 
 * 
 * 
4 5 8
2 4 1
1 9 7
 * 


7 6 5
7 2 8
5 3 4


6 7 8
7 6 2
3 2 3


6 1 2
7 2 6
5 6 2


4 8 2
4 5 7
6 1 6

2 9 8
4 2 7
5 6 7


6 7 8
7 6 2
3 2 3


4 9 2
9 7 6
3 5 8

 * 
 */

const tempS = [
  [4, 9, 2],
  [9, 7, 6],
  [3, 5, 8],
];

console.log(firstProposedSolution(tempS));

/***
 *
 *
 *
 *
 */
