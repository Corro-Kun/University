const buttonMain = document.querySelector('.button-icon');
const buttonClose = document.querySelector('.button-close');
const bar = document.querySelector('.right-Bar');

buttonMain.addEventListener('click', ()=> {
    bar.classList.add('active');
});

buttonClose.addEventListener('click', ()=> {
    bar.classList.remove('active');
});