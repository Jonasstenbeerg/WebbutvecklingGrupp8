var html = 
    '<header class="topmenu">\
    <div class="navflexcontainer">\
    <div class="homelogo">\
    <a href="Index.html">Hem</a>\
    </div>\
    <nav class="navmenu">\
        <div class="burger">\
            <div class="line1"></div>\
            <div class="line2"></div>\
            <div class="line3"></div>\
        </div>\
        <div class="menuoptions">\
        <ul class="links">\
            <li><a href="Portfolio.html">Portfolio</a></li>\
            <li class="menuDrop"><a href="#">Anställda<i class="bx bx-chevron-down"></i></a>\
                <ul class="subMenu">\
                    <li><a href="Jonas.html">Jonas</a></li>\
                    <li><a href="Sandra.html">Sandra</a></li>\
                </ul>\
            </li>\
            <li><a href="Contact.html">Kontakt</a></li>\
        </ul>\
        </div>\
    </div>\
    </nav>';
document.getElementById('navmenu').innerHTML = html

const navDrop = () => {
    const burger = document.querySelector('.burger');
    const menuOptions = document.querySelector('.menuoptions')
    const links = document.querySelectorAll('.menuoptions a,i');
    const menuDrop = document.querySelector('.subMenu')

    burger.addEventListener('click',() => {
        menuOptions.classList.toggle('menuoptions-active');
        menuOptions.addEventListener('click',() => {
            menuDrop.classList.toggle('subMenu-active')
        });
        burger.classList.toggle('cross');

        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `linksFade 0.2s ease forwards ${index / 8}s`;
            };
        });
    });
};
navDrop();

const navflexcontainer = document.querySelector('.navflexcontainer');

window.onscroll = function(){
    var top = window.scrollY;
    if(top > 70){
        navflexcontainer.classList.add('scrolled');
    }
    else{
        navflexcontainer.classList.remove('scrolled');
    };
};