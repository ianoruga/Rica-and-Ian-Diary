const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p6");
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
let currentLocation = 1;
let numOfPapers = 7;
let maxLocation = numOfPapers + 1;
// function openBook() {}

// function closeBook() {}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        // openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;

        // closeBook();
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        document.querySelectorAll(".links-1").forEach((links) => {
          links.style.display = "block";
        });
        break;
      case 5:
        paper5.classList.add("flipped");
        paper5.style.zIndex = 5;
        document.querySelectorAll(".links-1").forEach((links) => {
          links.style.display = "none";
        });
        document.querySelectorAll(".links-2").forEach((links) => {
          links.style.display = "block";
        });
        break;
      case 6:
        paper6.classList.add("flipped");
        paper6.style.zIndex = 6;
        document.querySelectorAll(".links-2").forEach((links) => {
          links.style.display = "none";
        });
        document.querySelectorAll(".links-3").forEach((links) => {
          links.style.display = "block";
        });
        break;
      case 7:
        paper7.classList.add("flipped");
        paper7.style.zIndex = 7;
        document.querySelectorAll(".links-3").forEach((links) => {
          links.style.display = "none";
        });
        break;
      default:
        throw new Error("uknown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        // closeBook();
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 7;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 6;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 5;
        break;
      case 5:
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 4;
        document.querySelectorAll(".links-1").forEach((links) => {
          links.style.display = "none";
        });
        break;
      case 6:
        paper5.classList.remove("flipped");
        paper5.style.zIndex = 3;
        document.querySelectorAll(".links-1").forEach((links) => {
          links.style.display = "block";
        });
        document.querySelectorAll(".links-2").forEach((links) => {
          links.style.display = "none";
        });
        break;
      case 7:
        paper6.classList.remove("flipped");
        paper6.style.zIndex = 2;
        document.querySelectorAll(".links-2").forEach((links) => {
          links.style.display = "block";
        });
        document.querySelectorAll(".links-3").forEach((links) => {
          links.style.display = "none";
        });
        break;
      case 8:
        paper7.classList.remove("flipped");
        paper7.style.zIndex = 1;
        document.querySelectorAll(".links-3").forEach((links) => {
          links.style.display = "block";
        });
        break;
      default:
        throw new Error("uknown state");
    }
    currentLocation--;
  }
}
function setupPopupAnimation(
  triggerSelector,
  popupSelectorAttr,
  closeSelector,
  transitionTime = 400
) {
  const triggers = document.querySelectorAll(triggerSelector);

  triggers.forEach((trigger) => {
    const popupId = trigger.getAttribute(popupSelectorAttr);
    const popup = document.querySelector(popupId);
    const closeBtn = popup.querySelector(closeSelector);

    trigger.addEventListener("click", () => {
      popup.style.display = "flex";
      requestAnimationFrame(() => popup.classList.add("show"));
    });

    closeBtn.addEventListener("click", () => {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.style.display = "none";
      }, transitionTime);
    });
  });
}

// Call it with your custom class/selector setup:
setupPopupAnimation(".popup-trigger", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger2", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger3", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger4", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger5", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger6", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger7", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger8", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger9", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger10", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger11", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger12", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger13", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger14", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger15", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger16", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger17", "data-popup", ".popup-close", 400);
setupPopupAnimation(".popup-trigger18", "data-popup", ".popup-close", 400);
