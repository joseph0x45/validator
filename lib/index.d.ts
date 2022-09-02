/**
 * Represent the structure of a validator.
 */
interface validator {
    alias: string;
    validator: Function;
    message: string;
}
/**
 *
 * @param event : An event which takes place in the DOM
 */
declare const grabValue: (event: Event) => {
    target: HTMLInputElement;
    value: string;
};
/**
 * Insert a warning span under an input element
 * @param target : The HTML element that caused the event
 * @param warningText : The text to show to the user
 */
declare const insertWarning: (target: HTMLElement, warningText: string) => void;
/**
 * Remove a span under an input element once it's input gets validated
 * @param target : The HTML element under which was the span to be removed
 * @param warning : The text showed to the user
 */
declare const removeWarning: (target: HTMLElement, warning: string) => void;
declare const simpleTextInputs: NodeListOf<Element>;
declare const passworwdInputs: NodeListOf<Element>;
declare const emailInputs: NodeListOf<Element>;
declare const whatValidator: (wvValue: Event) => void;
declare const alphaOnly: validator;
declare const numOnly: validator;
declare const proEmail: validator;
declare const hasOneUpperCase: validator;
declare const isNCharsLong: validator;
declare const validators: validator[];
declare const numericOnly: RegExp;
