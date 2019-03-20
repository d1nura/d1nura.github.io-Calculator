let array = ["-", 1, "+", 2, "-", 3, "-", 4, "-", 5, "+", 1, "-", 2, "-", 3];
let xx = [];
let yy = [];
let prev;
let next;
let i = 0;

function minimize(array) {
  let fil = [];
  for (i; i < array.length; i++) {
    if (array[i] == "-") {
      array[i + 1] = -array[i + 1];
      array.splice(i, 1);
      //console.log(array);
    }
  }
  for (i in array) {
    if (array[i] == "+") {
      console.log("a:" + array);
      fil = array.filter(i => i != "+");
      console.log(fil);
    }
  }
  let output = fil.reduce((p, n) => p + n);
  console.log(output);
  return output;
}
/*
function min(array) {
  for (i; i < arr.length; i++) {
    if (array[i] == "-" && array[i + 2] != "-" && array[i - 2] != "-") {
      console.log(i);
      let minus = array[i - 1] - array[i + 1];
      array.splice(i - 1, 3, minus);
      console.log(array);
    }
    if (array[i] == "-") {
      if (array[i - 2] != "-") {
        prev = i - 1;
        xx.push(prev);
      }
      if (array[i + 2] != "-") {
        next = i + 1;
        yy.push(next);
      }
    }
  } ///
  console.log(xx, yy);
  let divi = [];
  for (i in xx) {
    let n = array.slice(xx[i], yy[i] + 1);
    console.log(n);
    a(n);

    //let z = divide(n);
    //divi.push(z);
  }
}

min(arr);
let x = [1, -2, -3, -1];

function a(array) {
  let fil = [];
  for (let m in array) {
    if (array[m] == "-") {
      //console.log(m);
      array[parseInt(m) + 1] = -array[parseInt(m) + 1];
      console.log(array);
      fil = array.filter(i => i != "-");
      console.log(fil);
    }
  }
  let ii = fil.reduce((p, n) => p + n);
  console.log(ii);
  return ii;
}

//a(x);
*/
