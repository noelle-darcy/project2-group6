var boarding = document.getElementById("boarding");
var grooming = document.getElementById("grooming");
var daycare = document.getElementById("daycare");

var groomingBtn = document.getElementById("grooming");
groomingBtn.addEventListener('click', grooming);
function grooming(event) {
    window.open("layouts/groomingBooking.handlebars")
}

var daycareBtn = document.getElementById("daycare");
daycareBtn.addEventListener('click', );
function daycare (event) {
    window.open("layouts/daycareBooking.handlebars")
}

var boardingBtn = document.getElementById("boarding");
boardingBtn.addEventListener('click', boarding);
function boarding (event) {
    window.open("layouts/boardingBooking.handlebars")
}