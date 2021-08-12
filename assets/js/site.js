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

//=======================================
// Initialize Swiper
//=======================================
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Pagination
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 1
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//======================================
// Scroll slider left or right
//======================================

function data-goBack() {
  document.getElementById('data-scroll-container').scrollBy({ 
    right: -40,
    behavior: 'smooth' 
  });
}

function data-goNext() {
  document.getElementById('data-scroll-container').scrollBy({ 
    right: 40,
    behavior: 'smooth' 
  });
}


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
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid {{ site.colors.cityorange }}}";
        document.body.appendChild(css);
    };
