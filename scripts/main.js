
let miImage = document.querySelector("img");

miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/gorilla.jpeg") {
    miImage.setAttribute("src", "images/firefox2.jpeg");
  } else {
    miImage.setAttribute("src", "images/gorilla.jpeg");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}