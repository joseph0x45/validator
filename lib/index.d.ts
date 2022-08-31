interface validator {
    alias: string;
    validator: Function;
}
declare const grabValue: (event: Event) => string;
declare const inputs: NodeListOf<Element>;
declare const whatValidator: (wvValue: Event) => void;
declare const alphaOnly: validator;
declare const numOnly: validator;
declare const email: validator;
declare const hasOneUpperCase: validator;
declare const validators: validator[];
declare const numericOnly: RegExp;
