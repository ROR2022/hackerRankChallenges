const calculateKangaroos = (x1, v1, x2, v2) => {
  if (v1 > v2 && (x2 - x1) % (v2 - v1) === 0) {
    return "YES";
  } else {
    return "NO";
  }
};

//casos de prueba
console.log(calculateKangaroos(0, 3, 4, 2));
console.log(calculateKangaroos(0, 2, 5, 3));
console.log(calculateKangaroos(0, 2, 5, 2));
console.log(calculateKangaroos(0, 2, 5, 1));
console.log(calculateKangaroos(0, 2, 5, 0));
