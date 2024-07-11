const migratoryBirds = (arr) => {
    console.log('arr:', arr);
  let birdCount = {};
  let max = 0;
  let maxBird = 0;

  for (let i = 0; i < arr.length; i++) {
    if (birdCount[arr[i]]) {
      birdCount[arr[i]]++;
    } else {
      birdCount[arr[i]] = 1;
    }
  }

  for (let key in birdCount) {
    if (birdCount[key] > max) {
      max = birdCount[key];
      maxBird = key;
      console.log('maxBird:', maxBird);
      console.log('max:', max);
    }
  }
  console.log('birdCount:', birdCount);
  return maxBird;
}

// Test cases
//console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
//console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3
console.log(migratoryBirds([2, 2,2, 1, 1, 3])); // 