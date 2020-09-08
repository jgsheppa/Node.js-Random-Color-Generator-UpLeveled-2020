//console.log(process.argv);

function hashGenerator(width, height) {
  const hash = '#';
  let arr = [];
  for (let i = 0; i < width; i++) {
    arr[i] = [];
    for (let j = 0; j < height; j++) {
      arr[i][j] = '#';
    }
  }
  return arr.join().slice(',');
}

console.log(hashGenerator(31, 10));
