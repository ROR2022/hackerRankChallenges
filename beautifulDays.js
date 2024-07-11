const beautifulDays = (i, j, k) => {
  //hacemos un ciclo que comienze en i y termine en j
  //en cada iteracion invertimos el numero y calculamos la diferencia
  //si la diferencia es multiplo de k, sumamos 1 a la variable count
  let count = 0;
  for (let x = i; x <= j; x++) {
    let num = x.toString().split("").reverse().join("");
    let diff = Math.abs(x - num);
    if (diff % k === 0) {
      count++;
    }
  }
  return count;
};
