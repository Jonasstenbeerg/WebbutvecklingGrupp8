
let results = [];
const addResult = ()=>{
    //Säger åt knappen att inte submita direkt
    // ev.preventDefault();
    
    var email = document.getElementById("formbox__emailInput").value;
    var emailValidationResult = document.getElementById("formBox__emailValidationResult");
    
    var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
    if(email.match(pattern))
    {
    let result = {
        name: document.getElementById('formbox__nameInput').value,
        telephonenr: document.getElementById('formbox__telephonenrInput').value,
        email: document.getElementById('formbox__emailInput').value,
        Ok: document.getElementById('formbox__termsOfUseCheckbox').value,
        message: document.getElementById('formBox__messageInput').value,
    }
    results.push(result);
    //resetar formsen och lägger till result i arrayen results
    document.querySelector('form').reset();

    // //Spara till local storage
    localStorage.setItem('formResult', JSON.stringify(results) );
    emailValidationResult.innerText = null;
}
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
const emailValidation = ()=>{
    
    var email = document.getElementById("formbox__emailInput").value;
    var emailValidationResult = document.getElementById("formBox__emailValidationResult");
    
    var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    let input = []
    if(email.match(pattern))
    {
        input.push("RÄTT! så ska det se ut");
        emailValidationResult.style.color = "green";

    }
    else
    {
        input.push("Fel! namn@exempel.se");
        emailValidationResult.style.color = "red";
    }
    
    emailValidationResult.innerText = input;
}

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// const slideWidth = slideSize.width;

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlizedPosition = (slide, index ) =>{
slide.style.left = slideWidth * index + 'px';
};


slides.forEach(setSlizedPosition);


const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
// slides.forEach((slide,index) => {
//     slide.style.left = slideWidth * index + 'px';
// });

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

const stopPictures = ()=>{
    
    const startButton = document.querySelector('.startStop-startButton');
    const stopButton = document.querySelector('.startStop-stopButton');

    stopButton.classList.add('disapear');
    startButton.classList.remove('disapear');

clearInterval(autoPictures);


}

const runPictures = ()=>{

    const startButton = document.querySelector('.startStop-startButton');
    const stopButton = document.querySelector('.startStop-stopButton');

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

