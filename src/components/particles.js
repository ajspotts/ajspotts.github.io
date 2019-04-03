import React from 'react'
import Particles from 'react-particles-js'

const Elements = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
	  	height: "100%",
	  	zIndex: "1"
    }}
  >
    <Particles
    params={{
	    "particles": {
			"number": {
			  "value": 150,
			  "density": {
				"enable": true,
				"value_area": 700
			  }
			},
			"color": {
			  "value": "#0085FF"
			},
			"shape": {
			  "type": "circle",
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 5
			  },
			  "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
			  "value": 0.4,
			  "random": false,
			  "anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			  }
			},
			"size": {
			  "value": 2,
			  "random": true,
			  "anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": true,
			  "distance": 140,
			  "color": "0085FF",
			  "opacity": .4,
			  "width": 1
			},
			"move": {
			  "enable": true,
			  "speed": 2,
			  "direction": "none",
			  "random": false,
			  "straight": false,
			  "out_mode": "out",
			  "bounce": false,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "window",
			"events": {
			  "onhover": {
				"enable": true,
				"mode": "grab"
			  },
			  "onclick": {
				"enable": true,
				"mode": "push"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 200,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200,
				"duration": 0.4
			  },
			  "push": {
				"particles_nb": 10
			  },
			  "remove": {
				"particles_nb": 2
			  }}
		  },
		  "retina_detect": true
	}} />
  </div>
)

export default Elements;