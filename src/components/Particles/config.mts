import { ISourceOptions } from './../../../node_modules/@tsparticles/engine/types/Types/ISourceOptions.d';

export const particleConfig: ISourceOptions = {
    fullScreen: false,
    background: {
        color: {
            value: "#143F72",
        },
    },
    particles: {
        color: {
            value: "#416798",
        },
        links: {
            color: "#416798",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: "bounce",
            attract: {
                enable: false,
                rotate: {
                    x: 400,
                    y: 1200,
                },
            },
        },
        number: {
            value: 225,
            density: {
                enable: true,
            },
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "polygon",
            options: {
                polygon: {
                    sides: 5,
                },
            },
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "repulse",
            },
            onHover: {
                enable: true,
                mode: "grab",
            },
        },
        modes: {
            grab: {
                distance: 150,
                links: {
                    opacity: 1,
                },
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 150,
                duration: 0.2,
            },
        },
    },
    detectRetina: true,
}
