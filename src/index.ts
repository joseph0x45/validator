interface validator  {
    alias: string
    validator: Function
}

/// NOTE *************************UTILITY FUNCTIONS******************************************//
const grabValue = (event: Event)=>{
    const target = event.target as HTMLInputElement
    return {
        "target": target,
        "value": target.value
    }
}



const insertWarning = (target: HTMLElement, warningText: string)=>{
    let span: HTMLElement| null = document.querySelector(`span[warning='${warningText}'][id='${target.id}']`)
    if (span) {
        return
    }
    span = document.createElement("span")
    span.innerText = warningText
    span.style.cssText = "color: red; font-size:10px; display: block;"
    span.setAttribute("warning", warningText)
    span.setAttribute("id", target.id)
    
    target.after(span)
}

const removeWarning = (target: HTMLElement, warning: string)=>{
    const span: HTMLElement| null = document.querySelector(`span[warning='${warning}'][id='${target.id}']`)
    if(span==null){
        return
    }
    span.remove()
    
}

// NOTE ****************************************************CORE*******************************************************************************************/
const inputs = document.querySelectorAll("input[type='text']")

inputs.forEach( element => {
    element.addEventListener(
        'input', (event)=>{
            whatValidator(event)
        }
    )
    
});
//***************************************************************************************************************************************************** */

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
            insertWarning(target, "Une erreur est survenue")      
        }else{
            removeWarning(target, "Une erreur est survenue")
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
        const { target, value } = grabValue(event)
        for(let char of value) {
            if (char!==char.toUpperCase()) {
            }else{
                break
            }
            
        }
        
    }
}


const validators = [
    alphaOnly,
    numOnly,
    hasOneUpperCase
]

// NOTE *****************************************************************REGEX******************************************************************* */
const numericOnly: RegExp = /[A-B]/