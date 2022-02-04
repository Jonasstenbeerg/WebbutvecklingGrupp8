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
                setTimeout(updateCount, 35)
            }
            else if(target === 48){
                setTimeout(updateCount, 30)
            }
            else if(target === 87){
                setTimeout(updateCount, 17)
            }
            else if(target === 16){
                setTimeout(updateCount, 60)
            }
            else if(target === 82){
                setTimeout(updateCount, 18)
            };
        }
        else{
            counter.innerText = target;
        };
        
    };
    updateCount();
});