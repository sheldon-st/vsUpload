import "../styles/main.css";
import "../styles/fonts.css";

import { ref } from "react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Banksy = () => {
  return (
    <html lang="en" data-scroll-container>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/fullpage.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="css/fonts.css" />
        <link rel="stylesheet" href="https://use.typekit.net/dxb2njt.css" />
        <link href="https://css.gg/css" rel="stylesheet" />
        <script
          src="https://kit.fontawesome.com/e06150d387.js"
          crossorigin="anonymous"
        ></script>

        <title>Banksy?</title>
      </head>
      <body ontouchstart="">
        <div class="img-bg" ref={ref}>
          <div class="doublefont2">BANKSY?</div>
          <div class="pin-container">
            <div class="pin tooltip" id="pin1">
              <i class="fas fa-fingerprint"></i>
              <div class="tooltip-content">
                <div class="content">
                  <h2></h2>
                  <p>
                    "Jef Aérosol’s famous and somewhat mysterious red arrow
                    appears on all his works and has become some sort of a
                    trademark, or second signature. Jef sometimes gives his own
                    explanations but he prefers the people to come up with their
                    own interpretations and feelings about the arrow!"
                  </p>
                </div>
              </div>
            </div>

            <div class="pin tooltip" id="pin2">
              <i class="fas fa-fingerprint"></i>
              <div class="tooltip-content">
                <div class="content">
                  <p>
                    Although many immedietely associate Banksy with this style,
                    he was by no means the first or only artist to use stencils
                    in this manner. It first became popular throughout the
                    1960-80s by French artists like Blek Le Rat, Miss Tic, and
                    Speedy Graphito.
                  </p>
                </div>
              </div>
            </div>

            <div class="pin tooltip" id="pin4">
              <i class="fas fa-fingerprint"></i>
              <div class="tooltip-content">
                <div class="content">
                  <h2></h2>
                  <p>
                    this figure is one of several pieces around the Northeastern
                    campus that French urban stencil artist Jean-François Perro
                    was commisioned to create
                  </p>
                </div>
              </div>
            </div>

            <div class="pin tooltip" id="pin5">
              <i class="fas fa-fingerprint"></i>
              <div class="tooltip-content">
                <div class="content">
                  <h2>Look! It's Signed,</h2>
                  <p>
                    but not by Banksy. Jef Aérosol is the better known psuedonym
                    for artist Jean-François Perro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="/js/app.js"></script>
      </body>
    </html>
  );
};
export default Banksy;
