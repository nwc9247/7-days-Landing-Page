const scrollBtn = document.querySelector('#scrollBtn');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });

});
