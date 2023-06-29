const title2 = document.querySelector(".greencath1n2");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 500) {
    title2.style.opacity = "1";
    title2.style.transform = "translateY(0px)";

  } else {
    title2.style.opacity = "0";
    title2.style.transform = "translateY(15px)";
  }
});

const imgfight = document.querySelector(".imgfight");
const imgplay = document.querySelector(".imgplay");
const imggym = document.querySelector(".imggym");
const imgjob = document.querySelector(".imgjob");
const card = document.querySelector(".card");
const images = document.querySelectorAll(".img");

//img fight
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = imgfight.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    imgfight.classList.add("active");
  }
});

// img play
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = imgplay.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    imgplay.classList.add("active");
  }
});

//img gym
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = imggym.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    imggym.classList.add("active");
  }
});

//img job
window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = imgjob.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    imgjob.classList.add("active");
  }
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    card.innerHTML = `<img class="imgcard" src="${image.src}" alt="${image.alt}"> <p class="pCard">${image.alt}</p>`;
    card.style.visibility = "visible";
    document.body.style.overflowY = "hidden";

    const imgcard = document.querySelector(".imgcard");
    card.addEventListener("click", () => {
      card.innerHTML = "";
      card.style.visibility = "hidden";
      document.body.style.overflowY = "auto";
    });
  });
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
});

const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    cursor.style.width = "80px";
    cursor.style.height = "80px";
  });

  img.addEventListener("mouseout", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  });
});

const h1Elements = document.querySelectorAll("h1");

h1Elements.forEach((h1) => {
  h1.addEventListener("mouseover", () => {
    cursor.style.width = "80px";
    cursor.style.height = "80px";
  });

  h1.addEventListener("mouseout", () => {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  });
});
