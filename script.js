let clickCirle = document.querySelectorAll(".circle-orbit");
let infoText = document.querySelector(".info-text");
let factsTitle = document.querySelector(".facts-title");
let factsText = document.querySelector(".facts-text");
let factsImage = document.querySelector(".image-facts-info");
let factsContent = document.querySelector(".facts-content");

fetch("./data.json")
  .then((response) => response.json())
  .then((factsData) => {
    clickCirle.forEach((circles, index) => {
      circles.addEventListener("click", () => {
        if (circles.classList.contains("active")) {
          return;
        }
        clickCirle.forEach((item) => {
          item.classList.remove("active");
        });
        circles.classList.add("active");
        factsContent.classList.add("hidden");
        factsTitle.classList.add("hidden");
        factsText.classList.add("hidden");
        setTimeout(() => {
          factsTitle.textContent = factsData[index].title;
          factsText.textContent = factsData[index].titleText;
          infoText.textContent = factsData[index].text;
          factsImage.style.background = `url(${factsData[index].image}) no-repeat center/cover`;
          factsTitle.classList.remove("hidden");
          factsText.classList.remove("hidden");
          factsContent.classList.remove("hidden");
        }, 300);
      });
    });
  });
