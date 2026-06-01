let revealElements = document.querySelectorAll(".reveal");
let clickCirle = document.querySelectorAll(".circle-orbit");
let infoText = document.querySelector(".info-text");
let factsTitle = document.querySelector(".facts-title");
let factsText = document.querySelector(".facts-text");
let factsImage = document.querySelector(".image-facts-info");
let factsContent = document.querySelector(".facts-content");
let socialPopup = document.querySelector(".social-popup");
let social = document.querySelector(".social");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
});

revealElements.forEach((element) => {
  observer.observe(element);
});

social.addEventListener("click", () => {
  socialPopup.classList.toggle("show");
});

fetch("./data.json")
  .then((response) => response.json())
  .then((factsData) => {
    factsTitle.textContent = factsData[0].title;
    factsText.textContent = factsData[0].titleText;
    infoText.textContent = factsData[0].text;
    factsImage.style.background = `url(${factsData[0].image}) no-repeat center/cover`;
    clickCirle.forEach((circles, index) => {
      circles.addEventListener("click", () => {
        if (circles.classList.contains("selected")) {
          return;
        }
        clickCirle.forEach((item) => {
          item.classList.remove("selected");
        });
        circles.classList.add("selected");
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
