anime.timeline({ loop: false }).add({
  targets: ".doodle-container .doodlefont",
  scale: [0.2, 1],
  opacity: [0, 1],
  easing: "easeOutCirc",
  duration: 200,
  delay: (el, i) => 100 * i,
});

new fullpage("#Artish", {
  autoScrolling: true,
  navigation: false,
});
new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  navigationPosition: "left",
});
