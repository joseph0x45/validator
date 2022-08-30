const inputs = document.querySelectorAll("input");
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
//**********************************************************************************VALIDATORS******************************************************************************* */
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
const validators = [
    alphaOnly,
    numOnly
];
/*****************************************************************REGEX******************************************************************* */
const numericOnly = /[A-B]/;
