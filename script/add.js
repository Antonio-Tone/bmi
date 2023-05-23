let button = document.getElementById('btn');
button.addEventListener('click', () =>{
       
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const outcome =document.getElementById('return');
    const allClear =document.getElementById('clear');
    let height_status =  true , weight_status = true

    if( height_status && weight_status){
        const bmi = ( weight / ((height*height)/10000).toFixed(1));
        if(bmi < 20){
            outcome.innerHTML = 'Under weight :'  + bmi;
            
        }else if(bmi >= 20 && bmi<=35){
            outcome.innerHTML = 'Normal weight :' + bmi;
        }else{
            outcome.innerHTML = 'Over weight :' + bmi;
        }
        console.log(outcome.innerHTML);
        
    }
});
