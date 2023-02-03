// navbar section 

const menBtn = document.querySelector("#menu-btn")
const navbar = document.getElementById('navbar')
const menu = document.querySelector(".menu")
const logo= document.querySelector('.logo')
const offset= 50
menBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu-open')

    console.log('salil')
})
window.addEventListener("scroll",()=>{
    if(pageYOffset>offset){
        navbar.classList.add('navbar-active');
        logo.style.display="none"

    }else{
        navbar.classList.remove('navbar-active')
    }
})

// scrool section 
const swiper = new Swiper('.swiper', {
    autoplay:{
      delay:3000,
      disableOnInteraction:false 
    },
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
  
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });
  // scrool section tugadi 
