const navDrop = () => {
    const burger = document.querySelector('.burger');
    const menuOptions = document.querySelector('.menuoptions')
    const links = document.querySelectorAll('.menuoptions a,i,li');
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


const counters = document.querySelectorAll('.percentCount');
const speed = 100;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
    
        const inc = target / speed;
        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            if(target === 46){
                setTimeout(updateCount, 35);
            }
            else if(target === 48){
                setTimeout(updateCount, 30);
            }
            else if(target === 87){
                setTimeout(updateCount, 17);
            }
            else if(target === 16){
                setTimeout(updateCount, 60);
            }
            else if(target === 82){
                setTimeout(updateCount, 18);
            }
            else if(target === 100){
                setTimeout(updateCount, 14);
            }
            else if(target === 90){
                setTimeout(updateCount, 17);
            };
        }
        else{
            counter.innerText = target;
        };
    };
    updateCount();   
});  
  
  




    