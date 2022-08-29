//Should tell the requested pattern of the value when user focus 
//Should outline input in red when user entered value doesn't match pattern
export const TextInputHandler  = (event: Event)=>{
    const target = event.target as HTMLInputElement
    let value = target.value
    
    if (Number.isInteger(Number(value))){
        target.style.outlineColor = 'black'
        console.log('yes');
        
    }else{
        target.style.cssText = "color: blue; outline-color:red"
    }
}

