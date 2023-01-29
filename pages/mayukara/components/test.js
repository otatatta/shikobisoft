import {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

export default function TsetParticles() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                autoPlay: true,
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 5,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "images",
                        images: {
                            src: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/a666a659b9fe48e69eb4df84e401aea0/karankoe.png",
                            width: 500,
                            height: 634
                        }
                    },

                    rotate: {
                        value: 0,
                        random: true,
                        direction: "counter-clockwise",
                        animation: {
                            enable: true,
                            speed: 15,
                            sync: false
                        }
                    },
                    size: {
                        value: {min: 10, max: 50},
                    },
                },
                detectRetina: true,
            }}
        />
    );
};