import { TextInputHandler } from "./modules/TextInput"

const textInput = document.querySelector("input[type='text'][id='test']") as HTMLInputElement
let validationClass = textInput.getAttribute('vtype')

textInput.addEventListener('input', (event)=>{
    TextInputHandler(event)
})
