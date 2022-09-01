interface validator  {
    alias: string
    validator: Function
    message: string
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
const simpleTextInputs = document.querySelectorAll("input[type='text']")
const passworwdInputs = document.querySelectorAll("input[type='password']")
const emailInputs = document.querySelectorAll("input[type='email']")

simpleTextInputs.forEach( element => {
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
    message: 'This field must not be a numeric values',
    validator: (event: Event)=>{
        const target = event.target as HTMLInputElement
        const value = target.value
        if(Number.isInteger(Number(value))){        
            insertWarning(target, alphaOnly.message)
        }else{
            removeWarning(target, alphaOnly.message);
            
        }
    }
}

const numOnly: validator = {
    alias: 'num',
    message: 'This field must only contain numerical values',
    validator: (event: Event)=>{
        const target = event.target as HTMLInputElement
        const value = target.value
        if(!Number.isInteger(Number(value))){        
            insertWarning(target, numOnly.message)      
        }else{
            removeWarning(target, numOnly.message)
        }
    }
}

const proEmail: validator = {
    alias: 'email',
    message: 'Only pro emails are accepted',
    validator: (event : Event)=>{
        const { target, value } = grabValue(event)
        
    }
}

const hasOneUpperCase: validator = {
    alias: '1up',
    message: 'Must contain at least one uppercase letter',
    validator: (event: Event)=>{
        const { target, value } = grabValue(event)
        for(let char of value) {
            if (char!==char.toUpperCase()) {
                insertWarning(target, hasOneUpperCase.message)
            }else{
                removeWarning(target, hasOneUpperCase.message)
            }
            
        }
        
    }
}

const isNCharsLong: validator = {
    alias: 'min',
    message: '',
    validator: (event: Event)=>{

    }
}

const validators = [
    alphaOnly,
    numOnly,
    hasOneUpperCase
]

// NOTE *****************************************************************REGEX******************************************************************* */
const numericOnly: RegExp = /[A-B]/