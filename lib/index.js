const inputs = document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener('input', (event) => {
        whatValidator(event);
    });
});
const whatValidator = (wvValue) => {
    const target = wvValue.target;
    const validator = target.getAttribute('wv');
    alphaOnly.validator(wvValue);
};
//**********************************************************************************VALIDATORS******************************************************************************* */
const alphaOnly = {
    alias: 'alpha',
    validator: (event) => {
        const target = event.target;
        const value = target.value;
        if (!Number.isInteger(Number(value))) {
            target.style.cssText = "outline-color: red";
        }
        else {
            target.style.cssText = "outline-color: none";
        }
    }
};
const numOnly = {
    alias: 'num',
    validator: () => {
    }
};
const validators = {
    alphaOnly,
    numOnly
};
