var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


// scroll animations using dom manipulation
window.onload = function () {
    const effect = document.querySelector(".main-home p");
    const effectOne = document.querySelectorAll(".main-home h2 , .main-home h3 , .main-home h5 , .my-image , .side-bar h3 ");
    const effectTwo = document.querySelectorAll(".aboutMe-image , .icons");
    const effectThree = document.querySelectorAll(" .lines , .details");
    const effectFour = document.querySelector(".skills-list");
    const effectFive = document.querySelector(".skills-img");
    const effectSix = document.querySelector(".experience-content .row");
    const effectSeven = document.querySelector(".success-gif");
    const effectEight = document.querySelector(".box-container");
    const effectNine = document.querySelectorAll(".programmer-img , .star-gif");
    const effectTen = document.querySelector(".container");

    window.addEventListener('scroll', scrollEffect);
    window.addEventListener('scroll', scrollEffectOne);
    window.addEventListener('scroll', scrollEffectTwo);
    window.addEventListener('scroll', scrollEffectThree);
    window.addEventListener('scroll', scrollEffectFour);
    window.addEventListener('scroll', scrollEffectFive);
    window.addEventListener('scroll', scrollEffectSix);
    window.addEventListener('scroll', scrollEffectSeven);
    window.addEventListener('scroll', scrollEffectEight);
    window.addEventListener('scroll', scrollEffectNine);
    window.addEventListener('scroll', scrollEffectTen);

    function scrollEffect() {
        if (window.scrollY <= 500) {
            effect.style.opacity = "1";
            effect.style.transform = "translateX(0px)";
            effect.style.transition = "1s ease-in-out";
        } else {
            effect.style.opacity = "0";
            effect.style.transform = "translateX(-50px)";
        }
    }

    scrollEffect();

    function scrollEffectOne() {
        effectOne.forEach(function (element) {
            if (window.scrollY <= 500) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0px)";
                element.style.transition = "1s ease-in-out";
            } else {
                element.style.opacity = "0";
                element.style.transform = "translateY(-50px)";
            }
        });
    }

    scrollEffectOne();


    function scrollEffectTwo() {
        effectTwo.forEach(function (element) {
            if (window.scrollY >= 300) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0px)";
                element.style.transition = "1s ease-in-out";
            } else {
                element.style.opacity = "0";
                element.style.transform = "translateY(-50px)";
            }
        });
    }

    scrollEffectTwo();


    function scrollEffectThree() {
        effectThree.forEach(function (element) {
            if (window.scrollY >= 300) {
                element.style.opacity = "1";
                element.style.transform = "translateX(0px)";
                element.style.transition = "1s ease-in-out";
            } else {
                element.style.opacity = "0";
                element.style.transform = "translateX(200px)";
            }
        });
    }

    scrollEffectThree();

    function scrollEffectFour() {
        if (window.scrollY >= 800) {
            effectFour.style.opacity = "1";
            effectFour.style.transform = "translateX(0px)";
            effectFour.style.transition = "1s ease-in-out";
        } else {
            effectFour.style.opacity = "0";
            effectFour.style.transform = "translateX(-200px)";
        }
    }

    scrollEffectFour();

    function scrollEffectFive() {
        if (window.scrollY >= 800) {
            effectFive.style.opacity = "1";
            effectFive.style.transform = "translateY(0px)";
            effectFive.style.transition = "1s ease-in-out";
        } else {
            effectFive.style.opacity = "0";
            effectFive.style.transform = "translateY(200px)";
        }
    }

    scrollEffectFive();

    function scrollEffectSix() {
        if (window.scrollY >= 1700) {
            effectSix.style.opacity = "1";
            effectSix.style.transform = "translateX(0px)";
            effectSix.style.transition = "1s ease-in-out";
        } else {
            effectSix.style.opacity = "0";
            effectSix.style.transform = "translateX(-100px)";
        }
    }

    scrollEffectSix();

    function scrollEffectSeven() {
        if (window.scrollY >= 1700) {
            effectSeven.style.opacity = "1";
            effectSeven.style.transform = "translateY(0px)";
            effectSeven.style.transition = "1s ease-in-out";
        } else {
            effectSeven.style.opacity = "0";
            effectSeven.style.transform = "translateY(200px)";
        }
    }

    scrollEffectSeven();

    function scrollEffectEight() {
        if(window.scrollY >= 2500) {
            effectEight.style.opacity = "1";
            effectEight.style.transform = "translateY(0px)";
            effectEight.style.transition = "1s ease-in-out";
        } else {
            effectEight.style.opacity = "0";
            effectEight.style.transform = "translateY(-100px)";
        }
    }

    scrollEffectEight();

    function scrollEffectNine() {
        effectNine.forEach(function (element) {
            if(window.scrollY >= 2500) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0px)";
                element.style.transition = "1s ease-in-out";
            } else {
                element.style.opacity = "0";
                element.style.transform = "translateY(-100px)";
            }
        });
    }

    scrollEffectNine();

    function scrollEffectTen() {
        if (window.scrollY >= 3300) {
            effectTen.style.opacity = "1";
            effectTen.style.transform = "translateY(0px)";
            effectTen.style.transition = "1s ease-in-out";
        } else {
            effectTen.style.opacity = "0";
            effectTen.style.transform = "translateY(200px)";
        }
    }

    scrollEffectTen();

}