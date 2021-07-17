import anime from "animejs/lib/anime.es.js";

const borderBottom = () =>
   anime({
      targets: ".active-line",
      width: ["1%", "100%"],
      easing: "easeInOutQuad",
      borderBottomWidth: "2px",
      borderBottomStyle: "solid",
      borderBottomColor: "var(--brand-purple)",
      opacity: "1",
   });

export { borderBottom };
