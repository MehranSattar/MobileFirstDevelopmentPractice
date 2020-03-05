const name = (className) => document.querySelector(className)

name('.open').addEventListener('click' , () => {
    name('.nav-links').classList.toggle('open');
})