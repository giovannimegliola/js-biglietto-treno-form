
const price_km = 0.21;
let price_u18 = 0.21 * 4 / 5;  //price with -20% discount
let price_o65 = 0.21 * 3 / 5;  //price with -40% discount


let button = document.getElementById('submit');

button.addEventListener ('click', function () {

    
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value); 
    let price_ticket = km * price_km; 

   
    let message = '';

    if(isNaN(km) === false){

        
        if(age === 2){
            message += `${(price_ticket.toFixed(2))}€ `;
        }
        else if(age === 1){
            message += `${(km * price_u18).toFixed(2)}€  (sconto del 20%)`;
        }
        else{
            message += `${(km * price_o65).toFixed(2)}€  (sconto del 40%)`;
        }
    }
    else{ 
        message +='Inserisci dei valori numerici';
    }

    document.getElementById('price_ticket').innerText = message;

  
    let full_name = document.getElementById('full_name').value;
    document.getElementById('passenger').innerHTML = `${full_name}`;

    document.getElementById('random_coach').innerHTML = `${Math.floor(Math.random() * 10) + 1}`;

    document.getElementById('random_code').innerHTML = `${Math.floor(Math.random() * 99999) + 1}`;
    
 
});
