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
   
}



    const nameInput = document.getElementById('formbox__nameInput');
    
        nameInput.addEventListener('input',function(){
            
            nameInput.parentElement.className = ('formBox__control');

        })
    


const telefon = document.getElementById('formbox__telephonenrInput');

    telefon.addEventListener('input',function(){

        telefon.parentElement.className = ('formBox__control');

    })



var button = document.querySelector('.button__download');
var symbol = document.querySelector('.fa-download');


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

    });


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


    const emailInput = document.getElementById("formbox__emailInput");
        
            emailInput.addEventListener('input', function(){

                var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
   
                if(emailInput.value.match(pattern))
                {
                    setSuccess(emailInput);
                }
                else
                {
                    setError(emailInput,'Felaktigt värde');
                }

            })
        
        
        

const submitButton = document.querySelector(".formBox__buttons-style");


    submitButton.addEventListener('click',function(){
    var name = document.getElementById("formbox__nameInput");
    var telephone = document.getElementById("formbox__telephonenrInput");
    var email = document.getElementById("formbox__emailInput");

    var namePattern = /^((?!-)[A-Öa-zá-ý-]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*).*(?<!-)$/;
    
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
    const button = document.querySelector(".formBox__buttons-style");
    
    if(numberOffSucces.length===3)
    {
        addResult();
        numberOffSucces.forEach(success => {
            success.className = 'formBox__control';
        });
        const svg = document.querySelector("path");
        
        button.classList.add("formBox__submit-animating");
        svg.classList.add("svg")
        setTimeout(() => {  button.classList.remove("formBox__submit-animating"); svg.classList.remove("svg"); }, 2000);
    }
    else 
    {
        button.classList.add("fail");
        setTimeout(() => {  button.classList.remove("fail"); }, 700);
    }
});


