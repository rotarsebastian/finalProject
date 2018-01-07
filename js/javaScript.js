var myIndex = 0;
var myIndexMobile = 0;
slideShow();
slideShowMobile();

function slideShow() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slides.length) {
        myIndex = 1;
    }
    slides[myIndex - 1].style.display = "block";
    console.log(myIndex);
    setTimeout(slideShow, 2500);
}

function slideShowMobile() {
    var a;
    var slidesMobile = document.getElementsByClassName("mySlides1");
    for (a = 0; a < slidesMobile.length; a++) {
        slidesMobile[a].style.display = "none";
    }
    myIndexMobile++;
    if (myIndexMobile > slidesMobile.length) {
        myIndexMobile = 1;
    }
    slidesMobile[myIndexMobile - 1].style.display = "block";
    console.log(myIndexMobile);
    setTimeout(slideShowMobile, 2500);
}






