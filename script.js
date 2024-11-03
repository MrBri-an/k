document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const me = document.querySelector(".me");
  
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");
      me.classList.toggle("active");
    });
  
    document.querySelectorAll(".me li").forEach((n) => {
      n.addEventListener("click", (event) => {
        setTimeout(() => {
          hamburgerMenu.classList.remove("active");
          me.classList.remove("active");
        }, 500);
      });
    });
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        hamburgerMenu.classList.add("hidden");
        me.classList.add("hidden");
      } else {
        hamburgerMenu.classList.remove("hidden");
        me.classList.remove("hidden");
      }
    });
  });