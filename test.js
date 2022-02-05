const skillBar = document.getElementById('skill__level-css');
const skillBar2 = document.getElementById('skill__level-css2');
const counters = document.querySelectorAll('.percent-counter');
const counters2 = document.querySelectorAll('.percent2');

skillBar2.addEventListener('animationstart', () => {
  counters2.forEach(counter => {
      counter.innerText = 0;
  });
  counters2.forEach(counter => {
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
// const counters = document.querySelectorAll('.percent-counter');

