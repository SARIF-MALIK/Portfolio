import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 150,
                  duration: 0.7,
                },
              },
            },
            particles: {
              color: {
                value: "#F6995C",
              },
              links: {
                color: "#F6995C",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 250,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 7 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}