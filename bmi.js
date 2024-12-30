const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`Please enter a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter a valid weight ${weight}`;
    }
    else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    if(bmi<18.5){
        result.innerHTML=`${bmi}<br>
        😒You are underweight👎`;
    }
    else if(bmi>=18.5 && bmi<=24.9){
        result.innerHTML=`<span>${bmi}</span><br>
        😎Your weight is normal👍`;
    }
    else{
        result.innerHTML=`<span>${bmi}</span><br>
        😭You are overweight👊`;
    }
    }
    
})
