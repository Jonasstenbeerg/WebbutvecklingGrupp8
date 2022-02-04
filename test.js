const skillBar = document.getElementById('skill__level-css');

skillBar.addEventListener('animationstart', () => {
    counters.forEach(counter => {
        counter.innerText = 0;
    });
    counters.forEach(counter => {
        const updateCount = () =>{
          const target = +counter.getAttribute('data-target');
          const speed = +counter.getAttribute('speed');
          const count = +counter.innerText; 
    
          const inc = target / speed;
    
          if(count < target) {
            
            counter.innerText = Math.ceil(count + inc);
            
            setTimeout(updateCount,16);
          }
          else {
            count.innerText = target;
          }
        }
    
        updateCount();
    });
  });
const counters = document.querySelectorAll('.percent-counter');


