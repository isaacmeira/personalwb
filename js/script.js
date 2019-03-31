
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
      "value": "#ff7f50"
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
  cursorcolor: "coral",
  cursorwidth: "10px",
  cursorborder: "none",
  horizrailenabled: false,
  hwacceleration: true,
  
});


// CIRCLE


$(document).ready(function () { // 6,32 5,38 2,34

  $("#htmlCircle").circliful({
    
    animation: 1,
    animationStep: 1,
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    percent: 70,
    progressColor: 'rgb(94,94,94)',
    fontColor:'rgb(94,94,94)',
    backgroundColor : 'rgb(94,94,94)',
    iconColor: 'coral',
    icon: 'f13b',
    iconSize: '40',
    iconPosition: 'middle',
    foregroundColor: 'coral'
  });
  $("#cssCircle").circliful({
    
    animation: 1,
    animationStep: 1,
    foregroundBorderWidth: 5,
    backgroundBorderWidth: 1,
    backgroundColor : 'rgb(94,94,94)',
    fontColor:'rgb(94,94,94)',
    percent: 65,
    iconColor: 'coral',
    icon: 'f13c',
    iconSize: '40',
    iconPosition: 'middle',
    foregroundColor: 'coral'
  });
  $("#jsCircle").circliful({
    
    animation: 1,
    animationStep: 1,
    foregroundBorderWidth: 5,
    backgroundColor : 'rgb(94,94,94)',
    fontColor:'rgb(94,94,94)',
    backgroundBorderWidth: 1,
    percent: 60,
    iconColor: 'coral',
    icon: 'f12e',
    iconSize: '40',
    iconPosition: 'middle',
    foregroundColor: 'coral'
  });


});



