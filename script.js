let clickCirle = document.querySelectorAll(".circle-orbit");
let infoText = document.querySelector(".info-text");
let factsTitle = document.querySelector(".facts-title");
let factsText = document.querySelector(".facts-text");
let factsImage = document.querySelector(".image-facts-info");

const factsData = [
  {
    title: `Three pillars of Gothic`,
    titleText: `structural lightness. height, light.`,
    text: `We firmly believe that high aesthetics must serve and enhance function. Beauty is not a superficial addition; it is inherent in a well-designed space. From the grand sweep of a dome to the tactile quality of a handrail, every aesthetic choice is made to improve the livability, flow, and emotional resonance of the space. We create buildings that are not only stunning to behold but genuinely enhance human interaction and well-being.`,
    image: `./img/facts/info-image_0.png`,
  },
  {
    title: `Lighting technology in a Gothic cathedral`,
    titleText: `Stained glass as “new light” and a mystical narrative.`,
    text: `In Gothic architecture, light had profound theological significance—the "new light", symbolizing Divine Wisdom. Stained glass became the key tool, transforming sunlight into a mystical, colored, shimmering flow. These massive colored windows not only created an atmosphere of transcendence but also served as the "Bible of the Illiterate," visually narrating biblical stories and lives of saints.`,
    image: `./img/facts/info-image_1.png`,
  },
  {
    title: `Evolution of style`,
    titleText: `From severe Early Gothic to the decorative "Flamboyant" finale.`,
    text: `Gothic style evolved from the austere Early Gothic with lancet windows (12th century) to the peak of High Gothic (13th century), where walls were maximally thinned (Rayonnant). The evolution concluded with the decorative "Flamboyant" finale in the 15th century. This late style, with its curved, "flame-like" tracery, focused on ornament and refinement, prioritizing aesthetics over structural ambition.`,
    image: `./img/facts/info-image_2.png`,
  },
  {
    title: `Regional Schools of Gothic Architecture`,
    titleText: `A Comparison of France, England, and Germany`,
    text: `As it spread, Gothic architecture adapted, creating regional schools. French Gothic focused on extreme height and verticality. In contrast, English Gothic emphasized horizontal length and the richness of the vaults, developing complex lierne and the famous fan vaults. In Germany, hall churches (Hallenkirche), where naves shared the same height, were common.`,
    image: `./img/facts/info-image_3.png`,
  },
  {
    title: `An Integral Part of the Gothic Cathedral`,
    titleText: `Portals as "The Bible in Stone": storytelling through realism.`,
    text: `Sculpture in the Gothic era became an integral part of the architecture, particularly in the design of portals, which served as the "Bible in Stone." Figures depicting saints and scenes of the Last Judgment acquired a new realism and humanity. They became detached from the stone block, expressing emotions and individuality, marking a significant shift from Romanesque stylization towards more lifelike images.`,
    image: `./img/facts/info-image_4.png`,
  },
  {
    title: `Legacy and Rebirth`,
    titleText: `From Medieval Oblivion to 19th-Century Gothic Revival`,
    text: `Gothic architecture was rejected during the Renaissance as a "barbaric" style. However, in the 19th century, it experienced a triumphant revival during the Neo-Gothic (Gothic Revival) period. Romantics saw in it an ideal of medieval faith and national spirit, making it a dominant style for many public buildings (e.g., the Houses of Parliament in London) and leading to the completion of many great medieval cathedrals.`,
    image: `./img/facts/info-image_5.png`,
  },
];

clickCirle.forEach((circles, index) => {
  circles.addEventListener("click", () => {
    if (circles.classList.contains("active")) {
      return;
    }
    clickCirle.forEach((item) => {
      item.classList.remove("active");
    });
    circles.classList.add("active");
    factsTitle.textContent = factsData[index].title;
    factsText.textContent = factsData[index].titleText;
    infoText.textContent = factsData[index].text;
    factsImage.style.background = `url(${factsData[index].image}) no-repeat center/cover`;
  });
});
