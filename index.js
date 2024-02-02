let para = document.querySelector(".p");
let change = document.getElementById("text");

change.textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded");
    change.textContent = "This is really cool!";
    para.append(change);
});

