//=======================================
// Initialize lozad library
//=======================================
lozad('.lozad', {
  load: function(el) {
    el.src = el.dataset.src;
    el.onload = function() {
      el.classList.add('fade')
    }
  }
}).observe()

//======================================
// Initialize Snap slider
//======================================
// Create a new slider.
const slider = new SnapSlider('.flex-row-slider', {
  id: 'media-slider-link',
  nav: '.slider-nav',
  start: 'first',
});


//======================================
// Logo svg color toggle
//======================================
var svgElement = document.getElementById("svgColor");

function logoToggle() {
  if (document.getElementById("prim-menu-checkbox").checked == true) {
    svgElement.classList.add("toggle-svg");
  } else {
    svgElement.classList.remove("toggle-svg");
  }
}

//========================================
// Change logo color when in footer
//========================================
var logoTarget = document.querySelector("footer");

const config = {
  root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
  rootMargin: '0px',
  threshold: 0.58
};

function logoColorChange (entries, observerLogo) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach(entry => {
    // Check hamburger not open
    if (document.getElementById("prim-menu-checkbox").checked == false) { 
      if (entry.isIntersecting) {
        // Change logo color
        svgElement.classList.add("toggle-svg")
      } else {
        // Remove logo color
        svgElement.classList.remove("toggle-svg")
      }
    }
  });
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object via config
let observerLogo = new IntersectionObserver(logoColorChange, config);
// Finally start observing the target element
observerLogo.observe(logoTarget);

//=====================================================
// Smooth scroll (plus polyfill)
//=====================================================
const links = document.querySelectorAll("nav ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

//=======================================
// Typing text animation
//=======================================
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #f19426}";
  document.body.appendChild(css);
};

//=======================================
// YouTube player API
//=======================================
// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("yt-play", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // bind events
  var playButton = document.getElementById("yt-play-button");
  playButton.addEventListener("click", function () {
    player.playVideo();
  });
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
