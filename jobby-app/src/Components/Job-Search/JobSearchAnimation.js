import anime from "animejs/lib/anime.es.js";

const slideOut = (func, decision) =>
   anime({
      targets: ".js-jobdetails-container",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInOutQuad",
      duration: 200,
      complete: () => {
         func(decision);
      },
   });
const slideIn = () =>
   anime({
      targets: ".js-jobdetails-container",
      translateX: [-30, 0],
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 200,
   });

const dropDown = () =>
   anime({
      targets: ".d-container",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 5000,
   });
export { slideOut, slideIn, dropDown };
