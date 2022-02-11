
const skillBar = document.getElementById('skill__level-css');

const percentCounter = (counterClass) => {

    const counters = document.querySelectorAll(counterClass);
    const speed = 200;
    counters.forEach(counter => {
        counter.innerText = 0;
    });
    counters.forEach(counter => {
        const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
          
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
}


skillBar.addEventListener('animationstart', () => {
    
  var windowtWidth = window.innerWidth;
  if ( windowtWidth < 768 ) {
    percentCounter(".percent-counter")
}
else 
{
    percentCounter(".desktop-percent-counter")
}
  });




