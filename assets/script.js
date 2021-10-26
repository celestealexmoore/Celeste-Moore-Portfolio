// Get the modal
let modal = document.getElementById("myModal");
let scissorsModal = document.getElementById("scissorsModal");
let dzmModal = document.getElementById("dzmModal");
let foodlyModal = document.getElementById("foodlyModal");
let fahliaModal = document.getElementById("fahliaModal");
let karaokeModal = document.getElementById("karaokeModal");
let figmaModal = document.getElementById("figmaModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let dzmBtn = document.getElementById("dzmBtn");
let foodlyBtn = document.getElementById("foodlyBtn");
let fahliaBtn = document.getElementById("fahliaBtn");
let karaokeBtn = document.getElementById("karaokeBtn");
let figmaBtn = document.getElementById("figmaBtn");

// Get the <span> element that closes the modal
let span = document.getElementById("close")[0];
let scissorsSpan = document.getElementById("scissorsClose")[0];
let dzmSpan = document.getElementById("dzmClose")[0];
let foodlySpan = document.getElementById("foodlyClose")[0];
let fahliaSpan = document.getElementById("fahliaClose")[0];
let karaokeSpan = document.getElementById("karaokeClose")[0];
let figmaSpan = document.getElementById("figmaClose")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
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
    modal.style.display = "none";
};
scissorsSpan.onclick = function () {
    modal.style.display = "none";
};
dzmSpan.onclick = function () {
    modal.style.display = "none";
};
foodlySpan.onclick = function () {
    modal.style.display = "none";
};
fahliaSpan.onclick = function () {
    modal.style.display = "none";
};
karaokeSpan.onclick = function () {
    modal.style.display = "none";
};
figmaSpan.onclick = function () {
    modal.style.display = "none";
};