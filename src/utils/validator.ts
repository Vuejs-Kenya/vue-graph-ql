import validator from "validator";

const number: RegExp = /[0-9]+/;
const upperAlphabet: RegExp = /[A-Z]+/;
const lowerAlphabet: RegExp = /[a-z]+/;
const specialCharacters: RegExp = /[\@\!\#\$\%\^\&\*\(\)\_\+\=\-\.\,\>\<\?\/\`\~\"\:\'\;\\]*/;
const specialCharacter: string = "`~!@#$%^&*()_-=+.>,</?;:'\\\"";

export interface ValidationResponse {
    result: boolean;
    message: string
}

export const isEmail = (email: string): ValidationResponse => {
    if (email.length < 4) {
        return { result: false, message: 'Please Provide a valid email'}
    } else if (!validator.isEmail(email)) {
        return {
            result: false,
            message: `${email} is not valid! Please Provide a valid Email`
        }
    }

    return {
        result: true,
        message: "Email is valid"
    }
}

export const isPassword = (password: string): ValidationResponse => {
    if (password.length < 8) {
        return { result: false, message: "Requirement over 8 characters" };
    } else if (!number.test(password)) {
        return { result: false, message: "Requirement number" };
    } else if (!upperAlphabet.test(password)) {
        return { result: false, message: "Requirement upper alphabet" };
    } else if (!lowerAlphabet.test(password)) {
        return { result: false, message: "Requirement lower alphabet" };
    } else if (!specialCharacters.test(password)) {
        return {
            result: false,
            message: `Hint include the following special characters: (${specialCharacter})`
        };
    }
    return { result: true, message: "" };
};