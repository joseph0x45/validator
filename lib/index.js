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
// NOTE ****************************************************APPEND TEXT INPUT VALIDATORS*******************************************************************************************/
const inputs = document.querySelectorAll("input[type='text']");
inputs.forEach(element => {
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
    validator: (event) => {
        const target = event.target;
        const value = target.value;
        if (Number.isInteger(Number(value))) {
            target.style.cssText = "outline-color: red";
        }
        else {
            target.style.cssText = "";
        }
    }
};
const numOnly = {
    alias: 'num',
    validator: (event) => {
        const target = event.target;
        const value = target.value;
        if (!Number.isInteger(Number(value))) {
            insertWarning(target, "Une erreur est survenue");
        }
        else {
            removeWarning(target, "Une erreur est survenue");
        }
    }
};
const email = {
    alias: 'email',
    validator: (event) => {
    }
};
const hasOneUpperCase = {
    alias: '1up',
    validator: (event) => {
        const { target, value } = grabValue(event);
        for (let char of value) {
            if (char !== char.toUpperCase()) {
            }
            else {
                break;
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
