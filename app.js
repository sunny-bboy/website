const navMotion = () => {
  const hamburger = document.querySelector(".hamburger-menu"),
    navigation = document.querySelector(".nav-links"),
    navLinks = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    navigation.classList.toggle("nav-motion");

    navLinks.forEach((eachLink, eachIndex) => {
      if (eachLink.style.animation) eachLink.style.animation = "";
      else
        eachLink.style.animation = `navFade 0.5s ease-in forwards ${
          eachIndex / 9 + 0.2
        }s`;
    });
    hamburger.classList.toggle("toggle");
    navLinks.forEach((eachLink) => {
      eachLink.addEventListener("click", () => {
        hamburger.click();
      });
    });
  });
};

navMotion();

const quote = document.querySelector(".quote");
const h1 = document.querySelector(".home h1");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(quote);
observer.observe(h1);
