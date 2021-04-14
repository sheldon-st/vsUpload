anime.timeline({ loop: false }).add({
  targets: ".doodle-container .doodlefont",
  scale: [4, 1],
  opacity: [0, 1],
  easing: "easeOutCirc",
  duration: 100,
  delay: (el, i) => 50 * i,
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
