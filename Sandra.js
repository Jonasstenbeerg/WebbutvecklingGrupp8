const navDrop = () => {
    const burger = document.querySelector('.burger');
    const menuOptions = document.querySelector('.menuoptions')

    burger.addEventListener('click',() => {
        menuOptions.classList.toggle('menuoptions-active');
    })
}
navDrop();

const navflexcontainer = document.querySelector('.navflexcontainer');

window.onscroll = function(){
    var top = window.scrollY;
    if(top > 100){
        navflexcontainer.classList.add('scrolled');
    }
    else{
        navflexcontainer.classList.remove('scrolled');
    }
};