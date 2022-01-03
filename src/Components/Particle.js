import Particles from "react-tsparticles";
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
              value: 120,
              density: {
                enable: false,
                value_area: 1200,
              },
            },
            color: {
              value: "hsla(35, 100%, 90%, 0.8 )",
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
              opacity: 0.3,
              width: 1.0,
              shadow: {
                enable: true,
                color: "hsla(25, 100%, 60%, 0.9 )",
                blur: 4,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 1,
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
              value: 0.5,
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
