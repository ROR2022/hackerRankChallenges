const angryProfessor = (k, a) => {
  //recorreremos el array de alumnos para determinar cuantos llegaron a tiempo
  //si el numero de alumnos que llegaron a tiempo es menor a k la clase se cancela
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count++;
    }
  }
  if (count < k) {
    return "YES";
  } else {
    return "NO";
  }
};
