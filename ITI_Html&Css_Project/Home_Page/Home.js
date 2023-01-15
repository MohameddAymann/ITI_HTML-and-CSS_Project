const typed = new Typed(".typing-animation", {
    strings: ["Information Technology Institute"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});

const navbar = document.querySelector("nav");
const animationSpan = document.getElementById("animation");

window.addEventListener('scroll', ()=>{
    if(scrollY > 20){
        navbar.style.position = "absolute";
    }else{
        navbar.style.position = "fixed";
        
    }
})

const scrollBtn = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', ()=>{
if(scrollY >= 100){
scrollBtn.classList.add('show')
}else{
scrollBtn.classList.remove('show') 
}
})