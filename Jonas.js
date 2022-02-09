/*-------------------------------------------------------------------------*/

/* -----------------------JS för Contact-------------------------------- */

let results = [];
const addResult = ()=>{
    let result = {
        name: document.getElementById('formbox__nameInput').value,
        telephonenr: document.getElementById('formbox__telephonenrInput').value,
        email: document.getElementById('formbox__emailInput').value,
        Offert: document.getElementById('formbox__offertCheckbox').checked,
        Tidsbokning: document.getElementById('formbox__tidsbokningCheckbox').checked,
        Rådgivning: document.getElementById('formbox__rådgivningCheckbox').checked,
        Annat: document.getElementById('formbox__annatCheckbox').checked,
        message: document.getElementById('formBox__messageInput').value,
    }
    results.push(result);
    //resetar formsen och lägger till result i arrayen results
    document.querySelector('form').reset();

    // //Spara till local storage
    localStorage.setItem('formResult', JSON.stringify(results) );
    // emailValidationResult.innerText = null;
}

const clearName = ()=>{
    const name = document.getElementById('formbox__nameInput');
    const formControll = name.parentElement;
    formControll.className = ('formBox__control');
    
}
const clearTelephone = ()=>{
const telefon = document.getElementById('formbox__telephonenrInput');
telefon.parentElement.className = ('formBox__control');
}

const dlInputs = ()=>{
    
    const blob = new Blob([JSON.stringify(results)],{type: "octet-stream"});

    const href = URL.createObjectURL(blob);

    const a = Object.assign(document.createElement("a"),{
        href,
        style: "display:none",
        download: "Inputs.json"
    });
    document.body.appendChild(a)

    a.click();
    URL.revokeObjectURL(href);
    a.remove();
}
var button = document.querySelector('.button__download');
var symbol = document.querySelector('.fa-download');
if(button){

    button.addEventListener('click',function() {
        symbol.classList.add('active');
        button.classList.add('active');
        window.setTimeout(function(){
            symbol.classList.remove('active');
            button.classList.remove('active');
            symbol.classList.add('inactive');
            button.classList.add('inactive');
        }, 2000);
        symbol.classList.remove('inactive');
        button.classList.remove('inactive');

    });
    
};

const setError = (input, message)=>{

    const formControll = input.parentElement;
    const errorMessage = formControll.querySelector('small');

    errorMessage.innerText = message;

    formControll.className = 'formBox__control fail';
}
const setSuccess = (input)=>{

    const formControll = input.parentElement;

    formControll.className = 'formBox__control success';
}
const emailValidation = ()=>{
    
    var email = document.getElementById("formbox__emailInput");

    var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
   
    if(email.value.match(pattern))
    {
        setSuccess(email);
    }
    else
    {
        setError(email,'MEN FEL!!!!');
    }
}
const validateAll = ()=>{
    var name = document.getElementById("formbox__nameInput");
    var telephone = document.getElementById("formbox__telephonenrInput");
    var email = document.getElementById("formbox__emailInput");

    var namePattern = /^((?!-)\w+[A-Za-zá-ý-]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*).*(?<!-)$/;
    
    var numberPattern = /^\d+\.?\d*$/;
    if(name.value.trim()==='')
    {
        setError(name,'name får inte vara tomt')
    }
    else if(!name.value.match(namePattern))
    {
        setError(name,'namnet kan ej innehålla udda tecken')
    }
    else
    {
        setSuccess(name);
    }
    if(telephone.value.trim()==='')
    {
        setError(telephone,'Telephonenumber får inte vara tomt')
    }
    else if(!telephone.value.match(numberPattern))
    {
        setError(telephone,'bara siffror!!')
    }
    else
    {
        setSuccess(telephone);
    }
    if(email.value.trim()==='')
    {
        setError(email,'email får inte vara tomt')
    }
    var numberOffSucces = document.querySelectorAll('.formBox__control.success');
    const button = document.querySelector(".btn");
    
    if(numberOffSucces.length===3)
    {
        addResult();
        numberOffSucces.forEach(success => {
            success.className = 'formBox__control';
        });
        const svg = document.querySelector("path");
        
        button.classList.add("animating");
        svg.classList.add("svg")
        setTimeout(() => {  button.classList.remove("animating"); svg.classList.remove("svg"); }, 2000);
    }
    else 
    {
        button.classList.add("fail");
        setTimeout(() => {  button.classList.remove("fail"); }, 700);
    }
}


/*-------------------------------------------------------------------------*/

/* -----------------------JS för Portfolio bildspel 1--------------------- */

const track = document.querySelector('.carousel__track');
if(track===null) {}
else
{
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const startButton = document.querySelector('.startStop-startButton');
const stopButton = document.querySelector('.startStop-stopButton');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);


const setSlizedPosition = (slide, index ) =>{
    slide.style.left = slideWidth * index + 'px';
    };

slides.forEach(setSlizedPosition);


const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex=== 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
}

    prevButton.addEventListener('click', e => {
    
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide)
    
    
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    
    });
    



nextButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
    
});


dotsNav.addEventListener('click', e => {

    const targetDot = e.target.closest('button');

    if(!targetDot) return

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    
})



let autoPictures = setInterval(function(){
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    var nextSlide;
    var nextDot;
    
    if(currentSlide===slides[4]){
        slides[4].classList.remove('current-slide');
        slides[0].classList.add('current-slide');
        dots[4].classList.remove('current-slide');
        dots[0].classList.add('current-slide');
        nextSlide = slides[0];
        nextDot = slides[0];
    }
    else 
    {
        nextSlide = currentSlide.nextElementSibling;
        nextDot = currentDot.nextElementSibling;
    }
    
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
 

}, 5000)

startButton.addEventListener('click', e => {
    stopButton.classList.remove('disapear');
    startButton.classList.add('disapear');
    
    autoPictures = setInterval(function(){
        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        var nextSlide;
        var nextDot;
        
        if(currentSlide===slides[4]){
            slides[4].classList.remove('current-slide');
            slides[0].classList.add('current-slide');
            dots[4].classList.remove('current-slide');
            dots[0].classList.add('current-slide');
            nextSlide = slides[0];
            nextDot = slides[0];
        }
        else 
        {
            nextSlide = currentSlide.nextElementSibling;
            nextDot = currentDot.nextElementSibling;
        }
        
        const nextIndex = slides.findIndex(slide => slide === nextSlide)
        
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
        
    
    }, 5000)
})

stopButton.addEventListener('click', e => {
    stopButton.classList.add('disapear');
    startButton.classList.remove('disapear');

clearInterval(autoPictures);
})
}




const showAllButtons = ()=>{
    
    const carouselLeftButton = document.querySelector('.carousel__button--left');
    const carouselRightButton = document.querySelector('.carousel__button--right');
    const startStopButtonContainer = document.querySelector('.carousel__startStopPictures');
    const dotsContainer = document.querySelector('.carousel__nav');

    carouselLeftButton.classList.remove('allDisapear');
    carouselRightButton.classList.remove('allDisapear');
    startStopButtonContainer.classList.remove('allDisapear');
    dotsContainer.classList.remove('allDisapear');

}

const hideAllButtons = ()=>{
    
    const carouselLeftButton = document.querySelector('.carousel__button--left');
    const carouselRightButton = document.querySelector('.carousel__button--right');
    const startStopButtonContainer = document.querySelector('.carousel__startStopPictures');
    const dotsContainer = document.querySelector('.carousel__nav');

    carouselLeftButton.classList.add('allDisapear');
    carouselRightButton.classList.add('allDisapear');
    startStopButtonContainer.classList.add('allDisapear');
    dotsContainer.classList.add('allDisapear');

}
    

track.addEventListener('click', e => {
    var viewportWidth = window.innerWidth;
    const hidden = document.querySelector('.carousel__nav.allDisapear');
    
    if ( viewportWidth < 768 ) {
        
    if(hidden===null)
    {
        hideAllButtons();
    }
    else
    {
        showAllButtons();
    }
}
});
    
    

/*-------------------------------------------------------------------------*/

/* -----------------------JS för Portfolio bildspel 2--------------------- */

const track2 = document.querySelector('.carousel2__track');
if(track2===null) {}
else
{
const slides = Array.from(track2.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const nextButton = document.querySelector('.carousel2__button--right');
const prevButton = document.querySelector('.carousel2__button--left');
const startButton = document.querySelector('.startStop2-startButton');
const stopButton = document.querySelector('.startStop2-stopButton');
const dotsNav2 = document.querySelector('.carousel2__nav');
const dots2 = Array.from(dotsNav2.children);


const setSlizedPosition = (slide, index ) =>{
    slide.style.left = slideWidth * index + 'px';
    };

slides.forEach(setSlizedPosition);


const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}


const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex=== 0) {
        prevButton.classList.add('is-hidden2');
        nextButton.classList.remove('is-hidden2');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden2');
            nextButton.classList.add('is-hidden2');
        } else {
            prevButton.classList.remove('is-hidden2');
            nextButton.classList.remove('is-hidden2');
        }
}

    prevButton.addEventListener('click', e => {
    
        const currentSlide = track2.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav2.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide)
    
    
        moveToSlide(track2, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    
    });
    



nextButton.addEventListener('click', e => {

    const currentSlide = track2.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav2.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    
    moveToSlide(track2, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
    
});


dotsNav2.addEventListener('click', e => {

    const targetDot = e.target.closest('button');

    if(!targetDot) return

    const currentSlide = track2.querySelector('.current-slide');
    const currentDot = dotsNav2.querySelector('.current-slide');
    const targetIndex = dots2.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track2, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    
})



let autoPictures2 = setInterval(function(){
    const currentSlide = track2.querySelector('.current-slide');
    const currentDot = dotsNav2.querySelector('.current-slide');
    var nextSlide;
    var nextDot;
    
    if(currentSlide===slides[4]){
        slides[4].classList.remove('current-slide');
        slides[0].classList.add('current-slide');
        dots2[4].classList.remove('current-slide');
        dots2[0].classList.add('current-slide');
        nextSlide = slides[0];
        nextDot = slides[0];
    }
    else 
    {
        nextSlide = currentSlide.nextElementSibling;
        nextDot = currentDot.nextElementSibling;
    }
    
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    
    moveToSlide(track2, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
 

}, 5000)

startButton.addEventListener('click', e => {
    stopButton.classList.remove('disapear2');
    startButton.classList.add('disapear2');
    
    autoPictures2 = setInterval(function(){
        const currentSlide = track2.querySelector('.current-slide');
        const currentDot = dotsNav2.querySelector('.current-slide');
        var nextSlide;
        var nextDot;
        
        if(currentSlide===slides[4]){
            slides[4].classList.remove('current-slide');
            slides[0].classList.add('current-slide');
            dots2[4].classList.remove('current-slide');
            dots2[0].classList.add('current-slide');
            nextSlide = slides[0];
            nextDot = slides[0];
        }
        else 
        {
            nextSlide = currentSlide.nextElementSibling;
            nextDot = currentDot.nextElementSibling;
        }
        
        const nextIndex = slides.findIndex(slide => slide === nextSlide)
        
        moveToSlide(track2, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
        
    
    }, 5000)
})

stopButton.addEventListener('click', e => {
    stopButton.classList.add('disapear2');
    startButton.classList.remove('disapear2');

clearInterval(autoPictures2);
})
}


const showAllButtons2 = ()=>{
    
    const carouselLeftButton = document.querySelector('.carousel2__button--left');
    const carouselRightButton = document.querySelector('.carousel2__button--right');
    const startStopButtonContainer = document.querySelector('.carousel2__startStopPictures');
    const dotsContainer = document.querySelector('.carousel2__nav');

    carouselLeftButton.classList.remove('allDisapear2');
    carouselRightButton.classList.remove('allDisapear2');
    startStopButtonContainer.classList.remove('allDisapear2');
    dotsContainer.classList.remove('allDisapear2');

}

const hideAllButtons2 = ()=>{
    
    const carouselLeftButton = document.querySelector('.carousel2__button--left');
    const carouselRightButton = document.querySelector('.carousel2__button--right');
    const startStopButtonContainer = document.querySelector('.carousel2__startStopPictures');
    const dotsContainer = document.querySelector('.carousel2__nav');

    carouselLeftButton.classList.add('allDisapear2');
    carouselRightButton.classList.add('allDisapear2');
    startStopButtonContainer.classList.add('allDisapear2');
    dotsContainer.classList.add('allDisapear2');

}

track2.addEventListener('click', e => {
    var viewportWidth = window.innerWidth;
    const hidden = document.querySelector('.carousel2__nav.allDisapear');
    
    if ( viewportWidth < 768 ) {
        
    if(hidden===null)
    {
        hideAllButtons();
    }
    else
    {
        showAllButtons();
    }
}
});
/*-------------------------------------------------------------------------*/

/* -----------------------JS för personlig sida-------------------------------- */

const skillBar = document.getElementById('skill__level-css');
const skillBar2 = document.getElementById('skill__level-css2');

if(skillBar===null) {}
else
{

skillBar2.addEventListener('animationstart', () => {
  const counters2 = document.querySelectorAll('.percent2');

  counters2.forEach(counter => {
      counter.innerText = 0;
  });
  counters2.forEach(counter => {
      const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const speed = 200;
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
  const counters = document.querySelectorAll('.percent-counter');

    counters.forEach(counter => {
        counter.innerText = 0;
    });
    counters.forEach(counter => {
        const updateCount = () =>{
          const target = +counter.getAttribute('data-target');
          const speed = 200;
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
}

