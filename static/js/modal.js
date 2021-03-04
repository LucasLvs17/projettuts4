
var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

var modalBtnsnap = document.querySelector('.modal-btnsnap');
var modalBgsnap = document.querySelector('.modal-bgsnap');
var modalClosesnap = document.querySelector('.modal-closesnap');
var modalBtnan = document.querySelector('.btnan');//à ajouter

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});
modalBtnan.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});

modalBtnsnap.addEventListener('click', function(){
    modalBgsnap.classList.add('bg-activesnap');
});
modalClosesnap.addEventListener('click', function(){
    modalBgsnap.classList.remove('bg-activesnap');
});
