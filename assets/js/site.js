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
var logoTarget = document.querySelector("changeLogo");

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
// Carousel
//=====================================================
document.addEventListener('DOMContentLoaded', function() {

  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(function( carousel ) {

    const ele = carousel.querySelector('ul');
    const bullets = carousel.querySelectorAll('ol li');
    const nextarrow = carousel.querySelector('.next');
    const prevarrow = carousel.querySelector('.prev');
    bullets[0].classList.add('selected');

    const setSelected = function() {
        bullets.forEach(function(bullet) {
           bullet.classList.remove('selected');
        });
        let nthchild = (Math.round(ele.scrollLeft/carousel.scrollWidth)+1);
        carousel.querySelector('ol li:nth-child('+nthchild+')').classList.add('selected');
    }

    const nextSlide = function() {
      if(!carousel.querySelector('ol li:last-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').nextElementSibling.querySelector('a').click();
        ele.scrollLeft = ele.scrollLeft + carousel.scrollWidth;
      } else {
        carousel.querySelector('ol li:first-child a').click();
        ele.scrollLeft = 0;
      }
    }

    const prevSlide = function() {
      if(!carousel.querySelector('ol li:first-child').classList.contains('selected')) {
        carousel.querySelector('ol li.selected').previousElementSibling.querySelector('a').click();
        ele.scrollLeft = ele.scrollLeft - carousel.scrollWidth;
      } else {
        carousel.querySelector('ol li:last-child a').click();
        ele.scrollLeft = ele.scrollWidth - carousel.scrollWidth;
      }
    }

    // Attach the handlers
    ele.addEventListener("scroll", setSelected);
    nextarrow.addEventListener("click", nextSlide);
    prevarrow.addEventListener("click", prevSlide);

    //setInterval for autoplay
    if(carousel.getAttribute('duration')) {
      setInterval(function(){ 
        if (ele != document.querySelector(".carousel:hover ul")) {
          if(ele.scrollWidth > ele.scrollLeft + carousel.scrollWidth) {
            ele.scrollLeft = ele.scrollLeft + carousel.scrollWidth;
          } else ele.scrollLeft = 0;
        }
      }, carousel.getAttribute('duration'));
    }
  }); //end foreach
    
}); //end onload

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
