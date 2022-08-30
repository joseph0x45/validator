const inputs = document.querySelectorAll("input");
inputs.forEach(element => {
    element.addEventListener('input', (event) => {
        whatValidator(event);
    });
});
const whatValidator = (wvValue) => {
    const target = wvValue.target;
    const validator = target.getAttribute('wv');
};
//**********************************************************************************VALIDATORS******************************************************************************* */
const alphaOnly = {
    alias: 'alpha',
    validator: () => {
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
