//let arr = [1, "*", 2, "+", 4, "-", 20, "/", 4];

function divide(array) {
  let oo = array.filter(i => i != "/");
  //console.log(oo);
  let divAns = oo.reduce((prev, next) => prev / next);
  return divAns;
}
function multiply(array) {
  let ll = array.filter(i => i != "*");
  //console.log(ll);
  let multiAns = ll.reduce((prev, next) => prev * next);
  return multiAns;
}
function add(array) {
  let fil = array.filter(i => i != "+");
  let output = fil.reduce((p, n) => p + n);
  return output;
}

function minimize(array) {
  let fil = [];
  let output;
  let i = 0;
  for (i; i < array.length; i++) {
    if (array[i] == "-") {
      array[i + 1] = -array[i + 1];
      array.splice(i, 1);
      //console.log("Arr::" + array);
    }
  }
  //console.log("Arr:1:" + array);
  for (let y in array) {
    return add(array);
  }

  console.log("Output::" + output);

  for (let o in array) {
    if (array[o] != "-" && array[o] != "+") {
      //console.log("has / and *");
      return array;
    }
  }
}

export function calc(array) {
  let xx = [];
  let yy = [];
  let prev;
  let next;

  let i = 0;

  //check if there are any "/" in the array.

  for (i; i < array.length; i++) {
    //get the values if there is only two no's between a "/".
    if (array[i] == "/" && array[i + 2] != "/" && array[i - 2] != "/") {
      let ans = array[i - 1] / array[i + 1];
      array.splice(i - 1, 3, ans);
    }
    //get the values numbers are divided multiple times.
    if (array[i] == "/") {
      if (array[i - 2] != "/") {
        prev = i - 1;
        xx.push(prev);
      }
      if (array[i + 2] != "/") {
        next = i + 1;
        yy.push(next);
      }
    }
  }
  //get the answers to each divsion arrays & put them in divi[].
  let divi = [];
  for (i in xx) {
    let n = array.slice(xx[i], yy[i] + 1);
    let z = divide(n);
    divi.push(z);
  }
  //creating the final array by adding the answers from divi[].
  let g = 0;
  for (i in array) {
    if (array[i] == "/" && array[i - 2] != "/") {
      array.splice(i - 1, yy[g] - xx[g] + 1, divi[g]);
      g++;
    }
  }
  let firstArr = array;
  //  console.log("arr1==" + firstArr);

  ///////////////////////////////////////////////////////////////////

  let preVal = [];
  let nextVal = [];
  let pre;
  let nex;
  let j = 0;
  for (j in firstArr) {
    if (
      firstArr[j] == "*" &&
      firstArr[parseInt(j) + 2] != "*" &&
      firstArr[j - 2] != "*"
    ) {
      let ab = firstArr[j - 1] * firstArr[parseInt(j) + 1];
      firstArr.splice(j - 1, 3, ab);
      // console.log(firstArr);
    }
    if (firstArr[j] == "*") {
      if (firstArr[j - 2] != "*") {
        pre = j - 1;
        preVal.push(pre);
      }
      if (firstArr[parseInt(j) + 2] != "*") {
        nex = parseInt(j) + 1;
        nextVal.push(nex);
      }
    }
  }
  //console.log(preVal);
  //console.log(nextVal);
  let multi = [];
  for (i in preVal) {
    let n = firstArr.slice(preVal[i], nextVal[i] + 1);
    let z = multiply(n);
    multi.push(z);
  }
  //console.log(multi);
  let s = 0;
  for (j in firstArr) {
    if (firstArr[j] == "*" && firstArr[j - 2] != "*") {
      firstArr.splice(j - 1, nextVal[s] - preVal[s] + 1, multi[s]);
      s++;
    }
  }
  //console.log(firstArr);
  let secArr = firstArr;
  console.log("SECARR==" + secArr);

  //////////////////////////////////////////////////////////////////////////

  return minimize(array);
}
