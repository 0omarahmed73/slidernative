"use strict";
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = (document.querySelector(".carousel .thumbnail"));
nextDom.addEventListener("click", () => {
    showSlider("next");
});
prevDom.addEventListener("click", () => {
    showSlider("prev");
});
let autoTime = 7000;
let runningTime = 3000;
let runTimeOut;
let runAuto;
function showSlider(button) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
    if (button === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    }
    else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, runningTime);
    runAutoSlider();
}
function runAutoSlider() {
    clearTimeout(runAuto);
    runAuto = setTimeout(() => {
        nextDom.click();
    }, autoTime);
}
runAutoSlider();
