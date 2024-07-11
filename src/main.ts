let nextDom = <HTMLButtonElement>document.getElementById("next");
let prevDom = <HTMLButtonElement>document.getElementById("prev");
let carouselDom = <HTMLDivElement>document.querySelector(".carousel");
let listItemDom = <HTMLDivElement>document.querySelector(".carousel .list");
let thumbnailDom = <HTMLDivElement>(
  document.querySelector(".carousel .thumbnail")
);

nextDom.addEventListener("click", () => {
  showSlider("next");
});
prevDom.addEventListener("click", () => {
  showSlider("prev");
});
let autoTime: number = 7000;
let runningTime: number = 3000;
let runTimeOut: number | undefined;
let runAuto: number | undefined;
function showSlider(button: string) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  if (button === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
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

function runAutoSlider(): void {
  clearTimeout(runAuto);
  runAuto = setTimeout(() => {
    nextDom.click();
  }, autoTime);
}

runAutoSlider();
