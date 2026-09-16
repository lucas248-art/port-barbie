/* =====================================================
   LUCAS.DEV — BARBIE / DREAM PORTFOLIO
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 900);

});


/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 40
  );

});


/* =====================================================
   MENU MOBILE
===================================================== */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.querySelector(".nav-links");


if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("open");

    navLinks.classList.toggle("open");

  });


  document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

      link.addEventListener("click", () => {

        menuBtn.classList.remove("open");

        navLinks.classList.remove("open");

      });

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
  document.querySelectorAll("section[id]");

const links =
  document.querySelectorAll(".nav-links a");


if (sections.length && links.length) {

  const navObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          links.forEach(link => {
            link.classList.remove("active");
          });


          const current =
            document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );


          if (current) {
            current.classList.add("active");
          }

        });

      },

      {
        threshold:0.35
      }

    );


  sections.forEach(section => {
    navObserver.observe(section);
  });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
  document.querySelectorAll(
    `
    .section-heading,
    .about-card,
    .about-text,
    .project-card,
    .skill-card,
    .contact-content
    `
  );


revealElements.forEach(element => {

  element.classList.add("reveal");

});


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

        revealObserver.unobserve(
          entry.target
        );

      });

    },

    {
      threshold:0.12
    }

  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =====================================================
   PROJECT CARDS — 3D
===================================================== */

document
  .querySelectorAll(".project-card")
  .forEach(card => {


    card.addEventListener(
      "mousemove",
      event => {

        if (window.innerWidth < 800) return;


        const rect =
          card.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const rotateX =
          (y - rect.height / 2) / 30;


        const rotateY =
          (rect.width / 2 - x) / 30;


        card.style.transform =
          `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
          `;

      }
    );


    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform = "";

      }
    );

  });


/* =====================================================
   DREAM CARD — MOUSE MOVEMENT
===================================================== */

const dreamCard =
  document.querySelector(".dream-card");


if (dreamCard) {

  window.addEventListener(
    "mousemove",
    event => {

      if (window.innerWidth < 900) return;


      const x =
        event.clientX /
        window.innerWidth -
        0.5;


      const y =
        event.clientY /
        window.innerHeight -
        0.5;


      dreamCard.style.transform =
        `
        translateY(
          calc(-50% + ${y * -18}px)
        )
        rotate(
          ${5 + x * 5}deg
        )
        `;

    }
  );

}


/* =====================================================
   HERO PARALLAX
===================================================== */

const hero =
  document.querySelector(".hero");


if (hero) {

  hero.addEventListener(
    "mousemove",
    event => {

      if (window.innerWidth < 800) return;


      const x =
        event.clientX /
        window.innerWidth -
        0.5;


      const y =
        event.clientY /
        window.innerHeight -
        0.5;


      const circles =
        document.querySelectorAll(
          ".hero-bg-circle"
        );


      circles.forEach(
        (circle, index) => {

          const intensity =
            index === 0
              ? 18
              : -12;


          circle.style.transform =
            `
            translate(
              ${x * intensity}px,
              ${y * intensity}px
            )
            `;

        }
      );


      const hearts =
        document.querySelectorAll(
          ".floating-heart"
        );


      hearts.forEach(
        (heart, index) => {

          const intensity =
            8 + index * 5;


          heart.style.marginLeft =
            `${x * intensity}px`;

          heart.style.marginTop =
            `${y * intensity}px`;

        }
      );

    }
  );

}


/* =====================================================
   SMOOTH BUTTON EFFECT
===================================================== */

document
  .querySelectorAll(".btn")
  .forEach(button => {


    button.addEventListener(
      "mousemove",
      event => {

        if (window.innerWidth < 700) return;


        const rect =
          button.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const moveX =
          (x - rect.width / 2) / 10;


        const moveY =
          (y - rect.height / 2) / 10;


        button.style.transform =
          `
          translate(
            ${moveX}px,
            ${moveY}px
          )
          `;

      }
    );


    button.addEventListener(
      "mouseleave",
      () => {

        button.style.transform = "";

      }
    );

  });


/* =====================================================
   HEART CLICK EFFECT
===================================================== */

document
  .querySelectorAll(
    ".floating-heart, .contact-decoration"
  )
  .forEach(heart => {


    heart.addEventListener(
      "click",
      () => {

        heart.animate(

          [
            {
              transform:
                "scale(1)"
            },

            {
              transform:
                "scale(1.6)"
            },

            {
              transform:
                "scale(1)"
            }

          ],

          {
            duration:500,
            easing:"ease-out"
          }

        );

      }
    );

  });


/* =====================================================
   PARALLAX NO SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  () => {

    const scroll =
      window.scrollY;


    const heroDecorations =
      document.querySelectorAll(
        ".floating-heart, .sparkle"
      );


    heroDecorations.forEach(
      (element, index) => {

        if (window.innerWidth < 700) return;


        const speed =
          0.04 +
          index * 0.015;


        element.style.transform =
          `translateY(${scroll * speed}px)`;

      }
    );

  }
);


/* =====================================================
   TYPEWRITER — HERO SMALL
===================================================== */

const heroSmall =
  document.querySelector(".hero-small");


if (heroSmall) {

  const originalText =
    heroSmall.textContent.trim();


  heroSmall.textContent = "";


  let index = 0;


  function typeText() {

    if (
      index <
      originalText.length
    ) {

      heroSmall.textContent +=
        originalText[index];

      index++;

      setTimeout(
        typeText,
        55
      );

    }

  }


  setTimeout(
    typeText,
    1200
  );

}


/* =====================================================
   PROJECT HOVER — IMAGE MOVEMENT
===================================================== */

document
  .querySelectorAll(".project-visual")
  .forEach(visual => {


    visual.addEventListener(
      "mousemove",
      event => {

        if (window.innerWidth < 800) return;


        const rect =
          visual.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left;


        const y =
          event.clientY -
          rect.top;


        const moveX =
          (x - rect.width / 2) / 20;


        const moveY =
          (y - rect.height / 2) / 20;


        const symbol =
          visual.querySelector(
            ".project-symbol, .dream-window, .code-lines"
          );


        if (symbol) {

          symbol.style.transform =
            `
            translate(
              ${moveX}px,
              ${moveY}px
            )
            `;

        }

      }
    );


    visual.addEventListener(
      "mouseleave",
      () => {

        const symbol =
          visual.querySelector(
            ".project-symbol, .dream-window, .code-lines"
          );


        if (symbol) {

          symbol.style.transform = "";

        }

      }
    );

  });


/* =====================================================
   CURSOR GLOW
===================================================== */

const cursorGlow =
  document.createElement("div");


cursorGlow.className =
  "cursor-glow";


document.body.appendChild(
  cursorGlow
);


document.addEventListener(
  "mousemove",
  event => {

    if (window.innerWidth < 800) return;


    cursorGlow.style.left =
      `${event.clientX}px`;


    cursorGlow.style.top =
      `${event.clientY}px`;

  }
);


/* =====================================================
   CURSOR GLOW STYLE
===================================================== */

const glowStyle =
  document.createElement("style");


glowStyle.textContent = `

.cursor-glow{

  position:fixed;

  width:160px;
  height:160px;

  border-radius:50%;

  pointer-events:none;

  z-index:1;

  transform:
    translate(-50%,-50%);

  background:
    radial-gradient(
      circle,
      rgba(255,79,163,.10),
      transparent 70%
    );

  transition:
    left .12s ease,
    top .12s ease;

}

`;


document.head.appendChild(
  glowStyle
);


/* =====================================================
   CONSOLE
===================================================== */

console.log(
  "%c🎀 LUCAS.DEV — DREAM WORLD",
  "color:#ff4fa3;font-size:20px;font-weight:bold;"
);

console.log(
  "%cThink Pink. Code Big. 💗",
  "color:#ffb7d8;font-size:14px;"
);
