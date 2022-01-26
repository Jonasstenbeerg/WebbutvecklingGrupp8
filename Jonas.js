
let results = [];
const addResult = (ev)=>{
    //Säger åt knappen att inte submita direkt
    ev.preventDefault();
    let result = {
        name: document.getElementById('name').value,
        question: document.getElementById('question').value,
    }
    results.push(result);
    //resetar formsen och lägger till result i arrayen results
    document.querySelector('form').reset();

    // var blob = new Blob([results],
    //     {type: "text/plain;charset=utf-8"}
    // );

        

    // //Spara till local storage
    localStorage.setItem('formResult', JSON.stringify(results) );
    
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