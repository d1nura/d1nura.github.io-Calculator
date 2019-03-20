import { calc } from "./x.mjs";

let number = document.querySelectorAll("#number");
let operator = document.querySelectorAll("#operator");
let display = document.querySelector("#display");
let display1 = document.querySelector("#display1");

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multy = document.querySelector(".multy");
let divide = document.querySelector(".divide");
let equal = document.querySelector(".equal");

let clear = document.querySelector("#clear");

let array = [];
function emp(arr) {
  for (let u in arr) {
    if (array[u] == "") {
      arr.splice(u, 1);
    }
  }
  return arr;
}

let i = 0;

for (i; i < number.length; i++) {
  number[i].onclick = e => {
    display1.innerHTML += e.target.innerHTML;
    display.innerHTML += e.target.innerHTML;
  };
}
plus.onclick = () => {
  console.log("1--dis:-" + display.innerHTML);
  if (display.innerHTML != " ") {
    array.push(parseFloat(display.innerHTML));
  }
  //emp(array);
  array.push("+");
  display1.innerHTML += "+";
  display.innerHTML += "+";
  //console.log("+");
  display.innerHTML = "";
  console.log("1--" + array);
};
minus.onclick = () => {
  if (display.innerHTML != " ") {
    array.push(parseFloat(display.innerHTML));
  }
  array.push("-");
  display1.innerHTML += "-";
  display.innerHTML = "";
  console.log("1--" + array);
};
divide.onclick = () => {
  if (display.innerHTML != " ") {
    array.push(parseFloat(display.innerHTML));
  }
  //emp(array);
  array.push("/");
  display1.innerHTML += "/";
  display.innerHTML += "/";
  console.log("1--divide==" + array);
  display.innerHTML = "";
  console.log("1--" + array);
};
multy.onclick = () => {
  if (display.innerHTML != " ") {
    array.push(parseFloat(display.innerHTML));
  }
  //emp(array);
  array.push("*");
  display1.innerHTML += "*";
  display.innerHTML += "*";
  //console.log("*");
  display.innerHTML = "";
  console.log("1--" + array);
};

equal.onclick = () => {
  array.push(parseFloat(display.innerHTML));
  //console.log("=");
  //console.log(array);
  console.log("1--aa:=" + array);
  //sconsole.log("1--ANSWER==" + calc(array));
  display1.innerHTML = calc(array);
  console.log("1--dis:=" + display.innerHTML);

  array = [];
  //display.innerHTML = " ";
  array.push(parseFloat(display1.innerHTML));
};

clear.onclick = () => {
  display.innerHTML = "";
  display1.innerHTML = "";
  array = [];
  console.log("1--" + array);
};
