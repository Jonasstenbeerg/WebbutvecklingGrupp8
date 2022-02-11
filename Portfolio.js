
const track = document.querySelector('.carousel__track');

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
    


    
    

/*-------------------------------------------------------------------------*/

/* -----------------------JS för Portfolio bildspel 2--------------------- */

const track2 = document.querySelector('.carousel2__track');
if(track2)
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

track2.addEventListener('click', e => {
    var viewportWidth = window.innerWidth;
    const hidden = document.querySelector('.carousel2__nav.allDisapear2');
    
    if ( viewportWidth < 768 ) {
        
    if(hidden===null)
    {
        hideAllButtons2();
    }
    else
    {
        showAllButtons2();
    }
}
});

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

