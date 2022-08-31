interface validator  {
    alias: string
    validator: Function
}

const grabValue = (event: Event)=>{
    const target = event.target as HTMLInputElement
    return target.value
}

const inputs = document.querySelectorAll("input[type, 'text']")

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

 

// NOTE **************************************************VALIDATORS***************************************************************** */
const alphaOnly: validator = {
    alias: 'alpha',
    validator: (event: Event)=>{
        const target = event.target as HTMLInputElement
        const value = target.value
        if(Number.isInteger(Number(value))){
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
        if(!Number.isInteger(Number(value))){
            target.style.cssText = "outline-color: red"
        }else{
            target.style.cssText = ""
        }
    }
}

const email: validator = {
    alias: 'email',
    validator: (event : Event)=>{

    }
}

const hasOneUpperCase: validator = {
    alias: '1up',
    validator: (event: Event)=>{
        const value = grabValue(event)
    }
}


const validators = [
    alphaOnly,
    numOnly,
    hasOneUpperCase
]

// NOTE *****************************************************************REGEX******************************************************************* */
const numericOnly: RegExp = /[A-B]/