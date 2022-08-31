interface validator {
    alias: string;
    validator: Function;
}
declare const inputs: NodeListOf<Element>;
declare const whatValidator: (wvValue: Event) => void;
declare const alphaOnly: validator;
declare const numOnly: validator;
declare const validators: validator[];
/*****************************************************************REGEX******************************************************************* */
declare const numericOnly: RegExp;
