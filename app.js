const title2 = document.querySelector(".greencath1n2")

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 500) {
        title2.style.opacity = "1";
      } else {
        title2.style.opacity = "0";
      }
  });

const imgGym = document.querySelector(".imggym")

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100 && window.scrollY < 200) {
        imgGym.style.width = "60%";
      }
      else if (window.scrollY > 200 && window.scrollY < 300) {
        imgGym.style.width = "55%";
      }
      else if (window.scrollY > 300 && window.scrollY < 400) {
        imgGym.style.width = "50%";
      }else if (window.scrollY > 400 && window.scrollY < 1100) {
        imgGym.style.width = "45%";
      } else if (window.scrollY > 1100 && window.scrollY < 1200) {
        imgGym.style.width = "50%";
      }else if (window.scrollY > 1200 && window.scrollY < 1300) {
        imgGym.style.width = "55%";
      }
      else if (window.scrollY > 1300 && window.scrollY < 1400) {
        imgGym.style.width = "60%";
      }
    //    else {
    //     imgGym.style.width = "70%";
    //   }
  });