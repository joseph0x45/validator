interface validator  {
    alias: string
    validator: Function
}

const inputs = document.querySelectorAll("input")

inputs.forEach( element => {
    element.addEventListener(
        'input', (event)=>{
            whatValidator(event)
        }
    )
    
});


const whatValidator = (wvValue:Event)=>{
    const target = wvValue.target as HTMLInputElement
    const validator = target.getAttribute('wv')
    alphaOnly.validator(wvValue)
    
}



//**********************************************************************************VALIDATORS******************************************************************************* */
const alphaOnly: validator = {
    alias: 'alpha',
    validator: (event: Event)=>{
        const target = event.target as HTMLInputElement
        const value = target.value
        if(!Number.isInteger(Number(value))){
            target.style.cssText = "outline-color: red"
        }else{
            target.style.cssText = "outline-color: none"
        }
    }
}
const numOnly: validator = {
    alias: 'num',
    validator: ()=>{

    }
}

const validators = {
    alphaOnly,
    numOnly
}