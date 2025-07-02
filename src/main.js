import 'normalize.css';
import './styles/style.scss';
import './styles/blog.scss';
import './styles/promotions.scss';
import './styles/articles.scss';
import gsap from 'gsap';
import Lenis from 'lenis';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';


document.addEventListener("DOMContentLoaded", () => {
  // lenis smooth scrolling
  const lenis = new Lenis({
  duration: 1.2, // Adjust scroll speed
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
  direction: 'vertical', // Can be 'horizontal'
  smooth: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // menu btn toggle
  let menuBtn = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.navbar');
  if (menuBtn && navbar) {
      menuBtn.onclick = () => {
          navbar.classList.toggle('active');
      }
  }
  // close menu on scroll
  window.addEventListener('scroll', () => {
      if (navbar) navbar.classList.remove('active');
      const header = document.querySelector('nav');
      if(header){
          if(window.scrollY > 0){
              header.classList.add('active');
          } else {
              header.classList.remove('active');
          }
      }
  });
  // theme light/dark mode changer
//   function changeClass(name1, name2){
//       if(body && btn){
//           body.classList.remove(name1)
//           body.classList.add(name2)
//           btn.src = "/Images/" + name2 + ".svg"
//       }
//   }
//   function getCookie(cname){
//       let name = cname + "="
//       let decodedCookie = decodeURIComponent(document.cookie)
//       let ca = decodedCookie.split(';')
//       for(let i = 0; i < ca.length;i++){
//           let c = ca[i]
//           while(c.charAt(0) == " "){
//               c = c.substring(1)
//           }
//           if(c.indexOf(name) == 0) {
//               return c.substring(name.length, c.length)
//           }
//       }
//       return "";
//   }

//   if (getCookie("theme").length == 0) {
//       document.cookie = "theme=light"
//   }

//   const change = document.querySelector("#theme-btn")
//   const body = document.querySelector("body")
//   const btn = change ? change.querySelector("img") : null
//   const cookieTheme = getCookie("theme")

//   if (change && btn && body) {
//       change.addEventListener("click", () => {
//           if(body.getAttribute("class") == "light"){
//               changeClass("light", "dark")
//           }else {
//               changeClass("dark", "light")
//           }
//           document.cookie = "theme=" + body.getAttribute("class")
//       })
//   }
//   if (body && btn && body.getAttribute("class") == cookieTheme){
//       body.classList.remove(body.getAttribute("class"))
//       body.classList.add(cookieTheme)
//   }
//   if (btn && body) {
//       btn.src= "/Images/" + body.getAttribute("class") + ".svg"; 
//   };

  var pricingSwiper = new Swiper(".pricing-swiper", {
    autoplay:true,
    speed: 4000,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    parallax:true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        loop:true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    //   more info accordion functionality
    const accordion = document.getElementsByClassName('contentBx');

    for (let i = 0; i < accordion.length; i++ ){
        accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
        })
    };

    //   intialize testimonials swiper
    var testimonialSwiper = new Swiper(".testimonialSwiper", {
    effect: "coverflow",
    autoplay: true,
    speed: 2000,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        loop: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        },
            breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },
    });

    // back to top progress button
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        if (!scrollProgress) return;
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        }else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#ce375c ${scrollValue}%, #4a154b ${scrollValue}%)`;
    };
    window.addEventListener('scroll', calcScrollValue);
    window.addEventListener('load', calcScrollValue);

    
    document.getElementById("year").textContent = new Date().getFullYear();
    

});


