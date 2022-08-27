
const textInput = document.querySelector("input[type='text'][id='test']") as HTMLInputElement
let validationClass = textInput.getAttribute('vtype')
let test = '5'
console.log(typeof parseInt(test));


if (validationClass=='alpha') {
    let value = textInput.value as string
    console.log(value);
    
    if (typeof parseInt(value)=='number') {
        console.log('duh');
        
    }
}
