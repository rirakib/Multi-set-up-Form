const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();

    let fname = document.forms["myform"]["fname"].value;
    let lname = document.forms["myform"]["lname"].value;
    if (fname == "") {
        alert("First name must be filled out");
        return false;
    } else if (lname == "") {
        alert("Last name must be filled out");
        return false;
    } else {
        slidePage.style.marginLeft = "-25%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    }




});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.forms["myform"]["email"].value;
    let number = document.forms["myform"]["number"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (number == "") {
        alert("Number must be filled out");
        return false;
    } else {
        slidePage.style.marginLeft = "-50%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    }



});
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();

    let date = document.forms["myform"]["date"].value;
    let gender = document.forms["myform"]["gender"].value;
    if (date == "") {
        alert("Date must be filled out");
        return false;
    } else if (gender == "") {
        alert("Gender must be filled out");
        return false;
    } else {
        slidePage.style.marginLeft = "-75%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    }



});


submitBtn.addEventListener("click", function() {
    event.preventDefault();
    let username = document.forms["myform"]["username"].value;
    let password = document.forms["myform"]["password"].value;

    if (username == "") {
        alert("Username must be filled out");
        return false;
    } else if (password == "") {
        alert("Password must be filled out");
        return false;
    } else {
        alert("congratulations");
        location.reload();
    }
});
prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});