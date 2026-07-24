(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero = document.querySelector(".hero");
  const film = document.querySelector(".hero-film");

  function attachHeroFilm() {
    if (!film || reducedMotion) return;

    const source = film.dataset.src;
    if (!source) return;

    film.src = source;
    film.addEventListener("loadeddata", () => hero?.classList.add("has-film"), { once: true });
    film.load();
  }

  function initLenis() {
    if (reducedMotion || !window.Lenis) return null;

    const lenis = new window.Lenis({
      autoRaf: false,
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1
    });
    return lenis;
  }

  function initMotion(lenis) {
    if (reducedMotion || !window.gsap || !window.ScrollTrigger) return;

    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    gsap.fromTo(
      ".hero-copy > *",
      { y: 28 },
      { y: 0, duration: 1.15, stagger: 0.09, ease: "power3.out" }
    );

    if (film) {
      const setupScrub = () => {
        const duration = Math.max(0, film.duration - 0.04);
        film.pause();
        film.currentTime = 0;

        gsap.to(film, {
          currentTime: duration,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.12,
            onUpdate: ({ progress }) => {
              document.querySelector(".hero-time").textContent = (progress * duration).toFixed(1);
              gsap.set(".hero-progress i", { scaleX: progress });
            }
          }
        });
      };

      if (film.readyState >= 1) setupScrub();
      else film.addEventListener("loadedmetadata", setupScrub, { once: true });
    }

    gsap.to(".hero-copy", {
      yPercent: -18,
      opacity: 0.22,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "45% top",
        scrub: 0.7
      }
    });

    gsap.to(".hero-scrim", {
      opacity: 0.28,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "55% top",
        scrub: 0.7
      }
    });

    const chapters = gsap.utils.toArray(".chapter");
    chapters.forEach((chapter, index) => {
      ScrollTrigger.create({
        trigger: chapter,
        start: "top center",
        end: "bottom center",
        onToggle: ({ isActive }) => {
          if (!isActive) return;
          document.querySelector(".stage-number").textContent = String(index + 1).padStart(2, "0");
          gsap.to(".stage-line i", { scaleY: (index + 1) / chapters.length, duration: 0.65, ease: "power3.out" });
        }
      });
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".product-journey",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.65
      }
    })
      .to(".assembled-view img", { scale: 1.38, rotateY: 12, xPercent: -8, duration: 1.1, ease: "none" })
      .to(".assembled-view img", { scale: 1.76, xPercent: 16, yPercent: 4, duration: 1, ease: "none" })
      .to(".assembled-view", { clipPath: "inset(0 100% 0 0)", duration: 0.65, ease: "power2.inOut" })
      .set(".technical-view", { visibility: "visible" }, "<")
      .to(".technical-view", { clipPath: "inset(0% 0% 0% 0%)", duration: 0.65, ease: "power2.inOut" }, "<")
      .fromTo(".technical-image", { scale: 0.82, rotateX: 11, rotateY: -12 }, { scale: 1, rotateX: 2, rotateY: 4, duration: 1.2, ease: "none" }, "<")
      .to(".technical-image", { scale: 1.12, rotateY: -3, yPercent: -2, duration: 1.15, ease: "none" })
      .to(".technical-view", { scale: 1.05, yPercent: -3, duration: 0.8, ease: "none" });

    gsap.to(".material-image img", {
      scale: 1,
      yPercent: -4,
      ease: "none",
      scrollTrigger: {
        trigger: ".material-story",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.fromTo(
      ".result-media img",
      { scale: 1.15, clipPath: "inset(7% 7% 7% 7%)" },
      {
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: ".result-story",
          start: "top bottom",
          end: "center center",
          scrub: true
        }
      }
    );

    ScrollTrigger.refresh();
  }

  window.addEventListener("load", () => {
    attachHeroFilm();
    const lenis = initLenis();
    initMotion(lenis);
  }, { once: true });
})();
