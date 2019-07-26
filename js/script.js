particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00c4a7"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 4
      },

    },
    "opacity": {
      "value": 0.8680761065997452,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#f0f0f0",
      "opacity": 0.5366288658980243,
      "width": 0.9469921162906312
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
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
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
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
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})


AOS.init();
var app = document.getElementById('banner');








// nice scroll

$("body").niceScroll({
  cursorcolor: "#00c4a7",
  cursorwidth: "10px",
  cursorborder: "none",
  horizrailenabled: false,
  hwacceleration: true,

});


// CIRCLE


$(document).ready(function () { // 6,32 5,38 2,34

  $("#htmlCircle").circliful({

    animation: 1,
    animationStep: 2,
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percentages: 0,
    percent: 100,
    backgroundColor: 'rgb(94,94,94)',
    icon: 'f41b',
    iconPosition: 'middle',
    iconSize: 40,
    iconColor: '#2cc7e3',
    foregroundColor: '#2cc7e3'

  });
  $("#cssCircle").circliful({

    animation: 1,
    animationStep: 2,
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percentages: 0,
    percent: 100,
    backgroundColor: 'rgb(94,94,94)',
    icon: 'f3d3',
    iconPosition: 'middle',
    iconSize: 40,
    iconColor: '#75b242',
    foregroundColor: '#75b242'
  });
  $("#jsCircle").circliful({

    animation: 1,
    animationStep: 2,
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percentages: 0,
    percent: 100,
    backgroundColor: 'rgb(94,94,94)',
    icon: 'f41b',
    iconPosition: 'middle',
    iconSize: 40,
    iconColor: '#695cb3',
    foregroundColor: '#695cb3'
  });


});