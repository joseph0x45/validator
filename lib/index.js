const grabValue = (event) => {
    const target = event.target;
    return target.value;
};
const inputs = document.querySelectorAll("input[type, 'text']");
inputs.forEach(element => {
    element.addEventListener('input', (event) => {
        whatValidator(event);
    });
});
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
            target.style.cssText = "outline-color: red";
        }
        else {
            target.style.cssText = "";
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
        const value = grabValue(event);
    }
};
const validators = [
    alphaOnly,
    numOnly,
    hasOneUpperCase
];
// NOTE *****************************************************************REGEX******************************************************************* */
const numericOnly = /[A-B]/;
