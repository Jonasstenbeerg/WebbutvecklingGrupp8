const navDrop = () => {
    const burger = document.querySelector('.burger');
    const menuOptions = document.querySelector('.menuoptions')
    const links = document.querySelectorAll('.menuoptions a,i');

    burger.addEventListener('click',() => {
        menuOptions.classList.toggle('menuoptions-active');
        burger.classList.toggle('cross');

        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `linksFade 0.2s ease forwards ${index / 6}s`;
            };
        });
    });
};
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