$(document).ready(function(){
$('.slider').slick({
    autoplay: true,
    speed:1000,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    dots:true
});
});

const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(()=> {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue
    ('--width')) || 0
    progressBar.style.setProperty('--width', width+ .1)
}, 5)