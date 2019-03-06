// nice scroll

$("body").niceScroll({
  cursorcolor: "coral",
  cursorwidth: "10px",
  cursorborder: "none",
  horizrailenabled: false

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
    backgroundBorderWidth: 1,
    percent: 75,
    iconColor: 'coral',
    icon: 'f12e',
    iconSize: '40',
    iconPosition: 'middle',
    foregroundColor: 'coral'
  });


});

// Wrap every letter in a span
$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    
    delay: function(el, i) {
      return 150 * (i+1)
    }
  });

  $('.ml4').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml4 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      
      delay: function(el, i) {
        return 75 * (i+1)
      }
    });


