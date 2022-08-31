interface validator {
    alias: string;
    validator: Function;
    message: string;
}
declare const grabValue: (event: Event) => {
    target: HTMLInputElement;
    value: string;
};
declare const insertWarning: (target: HTMLElement, warningText: string) => void;
declare const removeWarning: (target: HTMLElement, warning: string) => void;
declare const inputs: NodeListOf<Element>;
declare const whatValidator: (wvValue: Event) => void;
declare const alphaOnly: validator;
declare const numOnly: validator;
declare const hasOneUpperCase: validator;
declare const validators: validator[];
declare const numericOnly: RegExp;
