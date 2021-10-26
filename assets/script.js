// Get the modal
let myModal = document.getElementById("myModal");
let scissorsModal = document.getElementById("scissorsModal");
let dzmModal = document.getElementById("dzmModal");
let foodlyModal = document.getElementById("foodlyModal");
let fahliaModal = document.getElementById("fahliaModal");
let karaokeModal = document.getElementById("karaokeModal");
let figmaModal = document.getElementById("figmaModal");

// Get the button that opens the modal
let myBtn = document.getElementById("myBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let dzmBtn = document.getElementById("dzmBtn");
let foodlyBtn = document.getElementById("foodlyBtn");
let fahliaBtn = document.getElementById("fahliaBtn");
let karaokeBtn = document.getElementById("karaokeBtn");
let figmaBtn = document.getElementById("figmaBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let scissorsSpan = document.getElementsByClassName("scissorsClose")[0];
let dzmSpan = document.getElementsByClassName("dzmClose")[0];
let foodlySpan = document.getElementsByClassName("foodlyClose")[0];
let fahliaSpan = document.getElementsByClassName("fahliaClose")[0];
let karaokeSpan = document.getElementsByClassName("karaokeClose")[0];
let figmaSpan = document.getElementsByClassName("figmaClose")[0];

// When the user clicks on the button, open the modal
myBtn.onclick = function () {
    myModal.style.display = "block";
};
scissorsBtn.onclick = function () {
    scissorsModal.style.display = "block";
};
dzmBtn.onclick = function () {
    dzmModal.style.display = "block";
};
foodlyBtn.onclick = function () {
    foodlyModal.style.display = "block";
};
fahliaBtn.onclick = function () {
    fahliaModal.style.display = "block";
};
karaokeBtn.onclick = function () {
    karaokeModal.style.display = "block";
};
figmaBtn.onclick = function () {
    figmaModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    myModal.style.display = "none";
};
scissorsSpan.onclick = function () {
    scissorsModal.style.display = "none";
};
dzmSpan.onclick = function () {
    dzmModal.style.display = "none";
};
foodlySpan.onclick = function () {
    foodlyModal.style.display = "none";
};
fahliaSpan.onclick = function () {
    fahliaModal.style.display = "none";
};
karaokeSpan.onclick = function () {
    karaokeModal.style.display = "none";
};
figmaSpan.onclick = function () {
    figmaModal.style.display = "none";
};