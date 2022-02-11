
const percentBar = document.getElementById('percentHTML')
if(percentBar===null){}
else{
    percentBar.addEventListener('animationstart', () => {
        const counters = document.querySelectorAll('.percentCount');
        
        const speed = 100;
        counters.forEach(counter => {
            counter.innerHTML = 0;

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
    });  
  
}



    