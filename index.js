console.log("Hello world");
console.log("Hello world2");

dateElement = document.querySelector("#date");
newDate = new Date();

dateElement.innerHTML = newDate.toLocaleString();