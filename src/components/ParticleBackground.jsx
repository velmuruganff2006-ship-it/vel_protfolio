import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // Optional: do something with the container
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: '#0a0e27',
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ff2e63',
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.8,
            },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
          move: {
            enable: true,
            speed: {
              min: 0.5,
              max: 2,
            },
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'bounce',
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ff7b54',
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ParticleBackground;
