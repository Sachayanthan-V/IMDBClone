console.log(localStorage.getItem("nameOfMovie"));
console.log(localStorage.getItem("imgUrlMovie"));
console.log(localStorage.getItem("yearOfMovie"));

let varname = localStorage.getItem("nameOfMovie");
let varimg = localStorage.getItem("imgUrlMovie");
let varyear = localStorage.getItem("yearOfMovie");

let name = document.getElementById('moviename');
let img = document.getElementById('movieImgUrl');
let year = document.getElementById('movieyear');

console.log("name", name);
console.log("name", img);
console.log("name", year);

name.textContent = varname;
img.src         = varimg;
year.textContent = varyear;