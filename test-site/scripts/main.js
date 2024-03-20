let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/paopao.webp") {
    myImage.setAttribute("src", "images/diqiu.webp");
  } else {
    myImage.setAttribute("src", "images/paopao.webp");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '闭上你的眼睛，' + myName;
  }
}

 

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "闭上你的眼睛，"+storedName;
}

myButton.onclick = function () {
  setUserName();
};
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});
 
/*
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "闭上你的眼睛，" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "闭上你的眼睛，"+storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  */
 