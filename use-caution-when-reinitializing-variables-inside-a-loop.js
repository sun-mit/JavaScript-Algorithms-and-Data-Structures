function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = []; /* <-----  row has been declared inside the outer loop. 
     Now a new row will be initialised during each iteration of the outer loop allowing 
     for the desired matrix. */
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);