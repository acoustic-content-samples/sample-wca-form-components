/**
 * Do not modify this file, it is auto-generated.
 */
/*
Copyright IBM Corporation 2017.
LICENSE: Apache License, Version 2.0
*/
import { GroupElement, Link, MultiReferenceElement, RenderingContext, SingleLinkElement, SingleTextElement, SingleToggleElement, isMultiGroupElement, isMultiReferenceElement, isSingleGroupElement, isSingleLinkElement, isSingleTextElement, isSingleToggleElement } from '@ibm-wch-sdk/ng';

export const KEY_TITLE = 'title';
export const KEY_ACTION_URL = 'actionUrl';
export const KEY_SUBMIT_BUTTON_LABEL = 'submitButtonLabel';
export const KEY_TERMS = 'terms';
export const KEY_SUBMIT_MESSAGE = 'submitMessage';
export const KEY_OPEN_RESULTS_TAB = 'openResultsTab';
export const KEY_FORM_ELEMENTS = 'formElements';

/*
 * @name WCA embed form
 * @id 5f99ae4b-0d9e-4c5b-875d-aaa0a4d1ef33
 */
export interface WcaEmbedForm {

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This text displays above the form.",
     *   "key": "title",
     *   "label": "Title"
     * }
    */
    ['title']?: SingleTextElement;

    /**
     * {
     *   "elementType": "link",
     *   "helpText": "This is the POST action URL found on the WCA form HTML.",
     *   "key": "actionUrl",
     *   "label": "Action URL",
     *   "required": true
     * }
    */
    ['actionUrl']: SingleLinkElement;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This text shows on the button which submits the form.",
     *   "key": "submitButtonLabel",
     *   "label": "Submit button label",
     *   "required": false
     * }
    */
    ['submitButtonLabel']?: SingleTextElement;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This text shows above the submit form button, and can be used to show terms, instructions, or any additional information to the user.",
     *   "key": "terms",
     *   "label": "Terms"
     * }
    */
    ['terms']?: SingleTextElement;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This message will be shown to the user upon submission of the form. It shows whether or not the request was successful.",
     *   "key": "submitMessage",
     *   "label": "Submit message"
     * }
    */
    ['submitMessage']?: SingleTextElement;

    /**
     * {
     *   "elementType": "toggle",
     *   "helpText": "Toggle this on if you would like a new browser tab to open and display database results from WCA upon form submission. Otherwise, the results will open in the current browser window.",
     *   "key": "openResultsTab",
     *   "label": "Open results tab",
     *   "statement": "Turn on to open WCA form results in a new tab."
     * }
    */
    ['openResultsTab']?: SingleToggleElement;

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Form element",
     *   "helpText": "A WCA form element, to display as part of this form. Add multiple elements to build the complete form.",
     *   "key": "formElements",
     *   "label": "Form elements",
     *   "minimumValues": 1,
     *   "required": true,
     *   "restrictTypes": [
     *     {
     *       "id": "e8577a0b-877b-4824-a926-810dcc19d4b8"
     *     }
     *   ]
     * }
    */
    ['formElements']: MultiReferenceElement;
}

export interface WcaEmbedFormElement extends GroupElement {
    /**
    * Pin the type reference to the well known ID
    */
    typeRef: {
        id: '5f99ae4b-0d9e-4c5b-875d-aaa0a4d1ef33'
    };
}

export interface SingleWcaEmbedFormElement extends WcaEmbedFormElement {
    value: WcaEmbedForm;
}

export interface MultiWcaEmbedFormElement extends WcaEmbedFormElement {
    values: WcaEmbedForm[];
}

/**
 * Tests if the value is of type WcaEmbedFormElement
 *
 * @param aValue the value to test
 * @return true if the value if of type WcaEmbedFormElement else false
*/
export function isWcaEmbedForm(aValue: any): aValue is WcaEmbedForm {
    return !!aValue
        && (!aValue[KEY_TITLE] || isSingleTextElement(aValue[KEY_TITLE]))
        && isSingleLinkElement(aValue[KEY_ACTION_URL])
        && (!aValue[KEY_SUBMIT_BUTTON_LABEL] || isSingleTextElement(aValue[KEY_SUBMIT_BUTTON_LABEL]))
        && (!aValue[KEY_TERMS] || isSingleTextElement(aValue[KEY_TERMS]))
        && (!aValue[KEY_SUBMIT_MESSAGE] || isSingleTextElement(aValue[KEY_SUBMIT_MESSAGE]))
        && (!aValue[KEY_OPEN_RESULTS_TAB] || isSingleToggleElement(aValue[KEY_OPEN_RESULTS_TAB]))
        && isMultiReferenceElement(aValue[KEY_FORM_ELEMENTS])
        ;
}

/**
 * Tests if the value is of type SingleWcaEmbedFormElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleWcaEmbedFormElement else false
*/
export function isSingleWcaEmbedFormElement(aValue: any): aValue is SingleWcaEmbedFormElement {
    return isSingleGroupElement(aValue) && isWcaEmbedForm(aValue.value);
}

/**
 * Tests if the value is of type MultiWcaEmbedFormElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiWcaEmbedFormElement else false
*/
export function isMultiWcaEmbedFormElement(aValue: any): aValue is MultiWcaEmbedFormElement {
    return isMultiGroupElement(aValue) && aValue.values.every(isWcaEmbedForm);
}

/*
 * @name WCA embed form
 * @id 5f99ae4b-0d9e-4c5b-875d-aaa0a4d1ef33
 */
export interface WcaEmbedFormType {

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This text displays above the form.",
     *   "key": "title",
     *   "label": "Title"
     * }
    */
    ['title']?: string;

    /**
     * {
     *   "elementType": "link",
     *   "helpText": "This is the POST action URL found on the WCA form HTML.",
     *   "key": "actionUrl",
     *   "label": "Action URL",
     *   "required": true
     * }
    */
    ['actionUrl']: Link;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This text shows on the button which submits the form.",
     *   "key": "submitButtonLabel",
     *   "label": "Submit button label",
     *   "required": false
     * }
    */
    ['submitButtonLabel']?: string;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This text shows above the submit form button, and can be used to show terms, instructions, or any additional information to the user.",
     *   "key": "terms",
     *   "label": "Terms"
     * }
    */
    ['terms']?: string;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "This message will be shown to the user upon submission of the form. It shows whether or not the request was successful.",
     *   "key": "submitMessage",
     *   "label": "Submit message"
     * }
    */
    ['submitMessage']?: string;

    /**
     * {
     *   "elementType": "toggle",
     *   "helpText": "Toggle this on if you would like a new browser tab to open and display database results from WCA upon form submission.",
     *   "key": "openResultsTab",
     *   "label": "Open results tab",
     *   "statement": "Turn on to open WCA results page upon form submit."
     * }
    */
    ['openResultsTab']?: boolean;

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "reference",
     *   "fieldLabel": "Form element",
     *   "helpText": "A WCA form element, to display as part of this form. Add multiple elements to build the complete form.",
     *   "key": "formElements",
     *   "label": "Form elements",
     *   "minimumValues": 1,
     *   "required": true,
     *   "restrictTypes": [
     *     {
     *       "id": "e8577a0b-877b-4824-a926-810dcc19d4b8"
     *     }
     *   ]
     * }
    */
    ['formElements']: RenderingContext;
}
