---
---

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

//=====================================================
// Show or hide contact buttons
//=====================================================

function showBTNS() {
  var element = document.getElementById("contactBTN");
  element.classList.toggle("hidden");
}

function hideBTN() {
  var element = document.getElementById("emailBTN");
  element.classList.toggle("hidden");
}

//=====================================================
// Copy contact button
//=====================================================

const aioContact = document.querySelectorAll('.copyemail span');
const aioMailing = document.querySelectorAll('.contact-buttons span');

aioMailing.forEach(copyemail => {
 copyemail.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(copyemail);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      const original = contact-buttons.textContent;
      copyemail.textContent = 'Copied!';
      copyemail.classList.add('success');

      setTimeout(() => {
        copyemail.textContent = original;
        copyemail.classList.remove('success');
      }, 1200);
    } catch(e) {
      const errorMsg = document.querySelector('.error-msg');
      errorMsg.classList.add('show');

      setTimeout(() => {
        errorMsg.classList.remove('show');
      }, 1200);
    }
  });
});

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
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid {{ site.colors.cityorange }}}";
  document.body.appendChild(css);
};
