const navSlide = () => {
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
        console.log(index/5)
    });
}

navSlide();