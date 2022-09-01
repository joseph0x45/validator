/// NOTE *************************UTILITY FUNCTIONS******************************************//
const grabValue = (event) => {
    const target = event.target;
    return {
        "target": target,
        "value": target.value
    };
};
const insertWarning = (target, warningText) => {
    let span = document.querySelector(`span[warning='${warningText}'][id='${target.id}']`);
    if (span) {
        return;
    }
    span = document.createElement("span");
    span.innerText = warningText;
    span.style.cssText = "color: red; font-size:10px; display: block;";
    span.setAttribute("warning", warningText);
    span.setAttribute("id", target.id);
    target.after(span);
};
const removeWarning = (target, warning) => {
    const span = document.querySelector(`span[warning='${warning}'][id='${target.id}']`);
    if (span == null) {
        return;
    }
    span.remove();
};
// NOTE ****************************************************CORE*******************************************************************************************/
const simpleTextInputs = document.querySelectorAll("input[type='text']");
const passworwdInputs = document.querySelectorAll("input[type='password']");
const emailInputs = document.querySelectorAll("input[type='email']");
simpleTextInputs.forEach(element => {
    element.addEventListener('input', (event) => {
        whatValidator(event);
    });
});
//***************************************************************************************************************************************************** */
const whatValidator = (wvValue) => {
    const target = wvValue.target;
    const wv = target.getAttribute('wv');
    const rules = wv.split(' ');
    rules.forEach(rule => {
        validators.forEach(validator => {
            if (validator.alias == rule) {
                validator.validator(wvValue);
            }
        });
    });
    // alphaOnly.validator(wvValue)
};
// NOTE **************************************************VALIDATORS***************************************************************** */
const alphaOnly = {
    alias: 'alpha',
    message: 'This field must not be a numeric values',
    validator: (event) => {
        const target = event.target;
        const value = target.value;
        if (Number.isInteger(Number(value))) {
            insertWarning(target, alphaOnly.message);
        }
        else {
            removeWarning(target, alphaOnly.message);
        }
    }
};
const numOnly = {
    alias: 'num',
    message: 'This field must only contain numerical values',
    validator: (event) => {
        const target = event.target;
        const value = target.value;
        if (!Number.isInteger(Number(value))) {
            insertWarning(target, numOnly.message);
        }
        else {
            removeWarning(target, numOnly.message);
        }
    }
};
// const email: validator = {
//     alias: 'email',
//     validator: (event : Event)=>{
//     }
// }
const hasOneUpperCase = {
    alias: '1up',
    message: 'Must contain at least one uppercase letter',
    validator: (event) => {
        const { target, value } = grabValue(event);
        for (let char of value) {
            if (char !== char.toUpperCase()) {
                insertWarning(target, hasOneUpperCase.message);
            }
            else {
                removeWarning(target, hasOneUpperCase.message);
            }
        }
    }
};
const validators = [
    alphaOnly,
    numOnly,
    hasOneUpperCase
];
// NOTE *****************************************************************REGEX******************************************************************* */
const numericOnly = /[A-B]/;
