new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: false,
  navigationPosition: "left",
  scrollHorizontally: true,
  slidesNavigation: true,

  slidesNavPosition: "bottom",
  navigationTooltips: ["ui/ux", "assignment 2", "assignment 3"],
  showActiveTooltip: true,
  continuousHorizontal: true,
  controlArrows: true,
});

// tell Barba to use the prefetch plugin
/* 
barba.use(barbaPrefetch);

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        // update the menu based on user navigation
        // menu.update();
        fullpage_api.destroy("all");
        // fullpage_api.destroy();
        fullpage_api.reBuild();
      },
      afterEnter() {
        fullpage_api.reBuild();
        // refresh the parallax based on new page content
      },
    },
    {
      namespace: "work",
      beforeEnter() {
        // update the menu based on user navigation
        AddFullpage();
        barba.prefetch(URL);
      },
      afterEnter() {
        // refresh the parallax based on new page content
        fullpage_api.reBuild();
      },
    },
  ],

  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
 */
