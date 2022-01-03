import Particles from "react-particles-js";
import React from "react";

function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "hsla(235, 100%, 90%, 0.6 )",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 7,
              },
            },
            line_linked: {
              enable: true, //daca il pun pe false se elimina liniile dintre puncte
              distance: 100,
              opacity: 0.7,
              width: 1.5,
              shadow: {
                enable: true,
                color: "hsla(205, 100%, 60%, 0.5 )",
                blur: 4,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 2,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 70,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.8,
              anim: {
                speed: 3,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
    </>
  );
}

export default Particle;
