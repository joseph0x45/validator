
const textInput = document.querySelector("input[type='text'][id='test']") as HTMLInputElement
let validationClass = textInput.getAttribute('vtype')

textInput.addEventListener('input', (event)=>{
    let target = event.target as HTMLInputElement
    let value = target.value
    
    if (Number.isInteger(Number(value))){
        console.log('yes');
        
    }else{
        console.log('nope');
        
    }
     
    
    
    
})
