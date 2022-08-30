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

    
}



//**********************************************************************************VALIDATORS******************************************************************************* */
const alphaOnly: validator = {
    alias: 'alpha',
    validator: ()=>{
        
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