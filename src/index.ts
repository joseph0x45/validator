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
    const wv : string = target.getAttribute('wv')
    const rules = wv.split(' ')
    rules.forEach(rule => {
        validators.forEach(validator => {
            if (validator.alias==rule) {
                validator.validator(wvValue)
            }
        });
    });
    // alphaOnly.validator(wvValue)
    
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
            target.style.cssText = ""
        }
    }
}
const numOnly: validator = {
    alias: 'num',
    validator: (event: Event)=>{
        const target = event.target as HTMLInputElement
        const value = target.value

    }
}

const validators = [
    alphaOnly,
    numOnly
]

/*****************************************************************REGEX******************************************************************* */
const numericOnly: RegExp = /[A-B]/