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
passworwdInputs.forEach(element => {
    element.addEventListener('input', (event) => {
        whatValidator(event);
    });
});
emailInputs.forEach(element => {
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
const proEmail = {
    alias: 'email',
    message: 'Only pro emails are accepted',
    validator: (event) => {
        const { target, value } = grabValue(event);
    }
};
const hasOneUpperCase = {
    alias: '1up',
    message: 'Must contain at least one uppercase letter',
    validator: (event) => {
        const { target, value } = grabValue(event);
        let uppercases = 0;
        for (let char of value) {
            if (char == char.toUpperCase()) {
                uppercases += 1;
            }
        }
        if (uppercases > 0) {
            removeWarning(target, hasOneUpperCase.message);
        }
        else {
            insertWarning(target, hasOneUpperCase.message);
        }
    }
};
const isNCharsLong = {
    alias: 'len',
    message: '',
    validator: (event) => {
        const { target, value } = grabValue(event);
        let min;
        let max;
        if (target.getAttribute('wmin')) {
            min = Number(target.getAttribute('wmin'));
            const belowMessage = `Must be at least ${min} characters`;
            console.log(min);
            if (value.length < min) {
                insertWarning(target, belowMessage);
            }
            else {
                removeWarning(target, belowMessage);
            }
        }
        if (target.getAttribute('wmax')) {
            max = Number(target.getAttribute('wmax'));
            const exceedMessage = `Must not exceed ${max} characters`;
            if (value.length > max) {
                insertWarning(target, exceedMessage);
            }
            else {
                removeWarning(target, exceedMessage);
            }
        }
    }
};
const validators = [
    alphaOnly,
    numOnly,
    hasOneUpperCase,
    isNCharsLong
];
// NOTE *****************************************************************REGEX******************************************************************* */
const numericOnly = /[A-B]/;
