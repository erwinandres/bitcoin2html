var scrollLinks = document.getElementsByClassName('js-scrollTo');
var contactSection = document.getElementById('contact');

for (var i = scrollLinks.length - 1; i >= 0; i--) {
  scrollLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    scrollTo(document.documentElement, contactSection, 800);
  });
}

function scrollTo(startElement, targetElement, duration) {
  var start = startElement.scrollTop;
  var to = targetElement.offsetTop;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;

  var animateScroll = function(){        
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    startElement.scrollTop = val;
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};
