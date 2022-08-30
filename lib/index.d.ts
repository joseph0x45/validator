interface validator {
    alias: string;
    validator: Function;
}
declare const inputs: NodeListOf<HTMLInputElement>;
declare const whatValidator: (wvValue: Event) => void;
declare const alphaOnly: validator;
declare const numOnly: validator;
declare const validators: {
    alphaOnly: validator;
    numOnly: validator;
};
