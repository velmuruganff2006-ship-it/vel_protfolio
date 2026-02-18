
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = ({ theme }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    key={theme}
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },
                            },
                            modes: {
                                grab: {
                                    distance: 200,
                                    links: {
                                        opacity: 1,
                                    },
                                },
                                push: {
                                    quantity: 4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: theme === 'light' ? ["#ff2e63", "#3498db"] : ["#e91e63", "#00bcd4"],
                            },
                            links: {
                                color: theme === 'light' ? "#c3cfe2" : "#ffffff",
                                distance: 160,
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
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 160,
                            },
                            opacity: {
                                value: 0.7,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 2, max: 6 },
                            },
                        },
                        detectRetina: true,
                        fullScreen: {
                            enable: true,
                            zIndex: -1 // Behind everything
                        },
                    }}
                />
            )}
        </>
    );
};

export default ParticleBackground;
