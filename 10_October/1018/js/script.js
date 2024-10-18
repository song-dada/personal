
let currentSlide = 0;
const slides = document.querySelectorAll('#slide img');

const showSlide = index => {
    
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.style.opacity = 1;
        } else {
            slide.style.opacity = 0;
        }
    });
    
    slides[currentSlide].style.opacity = 1;
}

setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 1500);


const list = document.querySelectorAll('#notice a');
const pop_bg = document.getElementById('pop_bg');

list.forEach(element => {
    element.addEventListener('click',()=>{
        pop_bg.style.display = 'block';
    });
});

const btn = document.querySelector('#pop_bg button');
btn.addEventListener('click',()=>{
        pop_bg.style.display = 'none';
    });