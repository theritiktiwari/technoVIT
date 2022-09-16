import React from 'react'
// import Particles from "react-particles";

const Landing = () => {
    // const customInit = useCallback(async (engine) => {
    //     await loadFull(engine);
    // });

    // const options = {
    //     particles: {
    //         number: {
    //             value: 80,
    //             density: {
    //                 enable: true,
    //                 value_area: 800,
    //                 factor: 1000
    //             }
    //         },
    //         fullscreen: {
    //             enable: false,
    //         },

    //         color: {
    //             value: "#888888"
    //         },

    //         shape: {
    //             type: "circle",
    //             stroke: {
    //                 width: 0,
    //                 color: "#000000"
    //             },
    //             polygon: {
    //                 nb_sides: 5
    //             },
    //         },

    //         opacity: {
    //             value: 0.7,
    //             random: false,
    //             anim: {
    //                 enable: false,
    //                 speed: 1,
    //                 opacity_min: 0.1,
    //                 sync: false
    //             }
    //         },

    //         size: {
    //             value: 5,
    //             random: true,
    //             anim: {
    //                 enable: false,
    //                 speed: 1,
    //                 size_min: 0.1,
    //                 sync: false
    //             }
    //         },

    //         line_linked: {
    //             enable: true,
    //             distance: 150,
    //             color: "#777",
    //             opacity: 0.6,
    //             width: 1
    //         },

    //         move: {
    //             enable: true,
    //             speed: 2,
    //             direction: "none",
    //             random: false,
    //             straight: false,
    //             out_mode: "out",
    //             attract: {
    //                 enable: false,
    //                 rotateX: 600,
    //                 rotateY: 1200
    //             }
    //         }
    //     },


    //     "interactivity": {
    //         "detectsOn": "canvas",
    //         "events": {
    //             "onClick": {
    //                 "enable": true,
    //                 "mode": "push"
    //             },
    //             "onDiv": {
    //                 "selectors": [],
    //                 "enable": false,
    //                 "mode": [],
    //                 "type": "circle"
    //             },
    //             "onHover": {
    //                 "enable": true,
    //                 "mode": "none",
    //                 "parallax": {
    //                     "enable": true,
    //                     "force": 60,
    //                     "smooth": 10
    //                 }
    //             },
    //             "resize": true
    //         },
    //         "modes": {
    //             "attract": {
    //                 "distance": 200,
    //                 "duration": 0.4,
    //                 "easing": "ease-out-quad",
    //                 "factor": 1,
    //                 "maxSpeed": 50,
    //                 "speed": 1
    //             },
    //             "bounce": {
    //                 "distance": 200
    //             },
    //             "bubble": {
    //                 "distance": 400,
    //                 "duration": 2,
    //                 "mix": false,
    //                 "opacity": 0.8,
    //                 "size": 40
    //             },
    //             "connect": {
    //                 "distance": 80,
    //                 "links": {
    //                     "opacity": 0.5
    //                 },
    //                 "radius": 60
    //             },
    //             "grab": {
    //                 "distance": 400,
    //                 "links": {
    //                     "blink": false,
    //                     "consent": false,
    //                     "opacity": 1
    //                 }
    //             },
    //             "light": {
    //                 "area": {
    //                     "gradient": {
    //                         "start": {
    //                             "value": "#ffffff"
    //                         },
    //                         "stop": {
    //                             "value": "#000000"
    //                         }
    //                     },
    //                     "radius": 1000
    //                 },
    //                 "shadow": {
    //                     "color": {
    //                         "value": "#000000"
    //                     },
    //                     "length": 2000
    //                 }
    //             },
    //             "push": {
    //                 "default": true,
    //                 "groups": [],
    //                 "quantity": 4
    //             },
    //             "remove": {
    //                 "quantity": 2
    //             },
    //             "repulse": {
    //                 "distance": 200,
    //                 "duration": 0.4,
    //                 "factor": 100,
    //                 "speed": 1,
    //                 "maxSpeed": 50,
    //                 "easing": "ease-out-quad"
    //             },
    //             "slow": {
    //                 "factor": 3,
    //                 "radius": 200
    //             },
    //             "trail": {
    //                 "delay": 1,
    //                 "pauseOnStop": false,
    //                 "quantity": 1
    //             }
    //         }
    //     },

    //     "manualParticles": [],
    //     "motion": {
    //         "disable": false,
    //         "reduce": {
    //             "factor": 4,
    //             "value": true
    //         }
    //     },

    //     "detectRetina": true,
    //     "duration": 0,
    //     "fpsLimit": 60,
    //     "pauseOnBlur": true,
    //     "pauseOnOutsideViewport": true,
    //     "responsive": [],
    //     "themes": [],
    //     "zLayers": 100
    // };
    return (
        <>
            <div className="main-heading">
                <div className="overlay">
                    {/* <Particles options={options} init={customInit} className="parallax-des" /> */}

                    <div className="text">
                        <div className="patterns">
                            <svg width="100%" height="100%">
                                <text x="50%" y="50%" textAnchor="middle">technoVIT'22</text>
                            </svg>
                            <h2 className='text-center'>23 - 25 September, 2022</h2>
                            <p className='text-center'>Annual tech fest of VIT Chennai</p>
                            {/* <img src={"https://i.imgur.com/u7UNOzj.png"} width={450} height={250} style={{display: "block", marginLeft: "35%"}}/>
                            <br></br>
                            <br></br>
                            <br></br> */}
                        </div>
    
                        
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Landing
