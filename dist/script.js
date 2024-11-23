let closer =document.querySelector("#closer");

closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}
  
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    closer.style.display = "block" ;
    navbar.classList.toggle('active');
    
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    closer.style.display = "block" ;
    cart.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form');

document.getElementById('login-btn').onclick = () => {
    closer.style.display = "block" ;
    loginForm.classList.toggle('active');
}

let seacrhForm = document.querySelector('.header .search-form');
 
// const searcg_btn =document.querySelector('#search-btn').onclick=()=>{
    
    // }
    
    const search_btn = document.getElementById('search-btn');
    search_btn.addEventListener('click',()=>{
            seacrhForm.classList.toggle('active');    
    })
window.onscroll= () => {
    seacrhForm.classList.remove('active');
}


let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

// Function to show the current slide
function showSlide(newIndex) {
    slides[index].classList.remove('active'); // Remove 'active' from the current slide
   
    if (newIndex >= slides.length) {
        index = 0; // Wrap to the first slide
    } else if (newIndex < 0) {
        index = slides.length - 1; // Wrap to the last slide
    } else {
        index = newIndex; // Set to the new valid index
    }
    
    slides[index].classList.add('active'); // Add 'active' to the new slide
}

// Event listener for the "next" button
document.querySelector('#slide-next').addEventListener('click', () => {
    showSlide(index + 1); // Move to the next slide
});

// Event listener for the "prev" button
document.querySelector('#slide-prev').addEventListener('click', () => {
    showSlide(index - 1); // Move to the previous slide
});
