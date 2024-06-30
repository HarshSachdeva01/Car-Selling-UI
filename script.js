// -------------------navbar toggle------------------------
let navBar = document.querySelector('.navLinks')
let menuBar = document.querySelector('#menuBtn')

menuBar.onclick = ()=>{
    navBar.classList.toggle('active')
}

// ----------------scroll section and stiicky navbar--------------------------
window.onscroll = () => {
    let header=document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100)
}

// -----------swiper code-----------------------------

var swiper = new Swiper(".myHome", {
    spaceBetween: 5,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 8500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // -------------------------counter section start--------------------------
  let valueDisplay = document.querySelectorAll('.num')
  let interval = 1000;

  valueDisplay.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-value'))

    let duration = Math.floor(interval/endValue)
    let counter = setInterval(function () {
      startValue+=1;
      valueDisplay.textContent=startValue
      if(startValue==endValue){
        clearInterval(counter)
      }
    },duration)
  })

  // --------------------client section starts------------------------------------

  var swiper = new Swiper(".myClient", {
    slidePerView:1,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    breakpoints:{
      640: {
        slidesPerView:1,
        spaceBetween:20, 
      },
      768: {
        slidesPerView:2,
        spaceBetween:40, 
      },
      1024: {
        slidesPerView:3,
        spaceBetween:50, 
      },
    }


  });

    