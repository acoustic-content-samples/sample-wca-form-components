/**
 * Do not modify this file, it is auto-generated.
 */
import { GroupElement, MultiTextElement, OptionSelection, SingleOptionSelectionElement, SingleTextElement, SingleToggleElement, isMultiGroupElement, isMultiTextElement, isSingleGroupElement, isSingleOptionSelectionElement, isSingleTextElement, isSingleToggleElement } from '@ibm-wch-sdk/ng';

export const KEY_NAME = 'name';
export const KEY_TYPE = 'type';
export const KEY_LABEL = 'label';
export const KEY_VALUE = 'value';
export const KEY_PLACEHOLDER = 'placeholder';
export const KEY_IS_REQUIRED = 'isRequired';
export const KEY_OPTION = 'option';

/*
 * @name WCA form element
 * @id e8577a0b-877b-4824-a926-810dcc19d4b8
 */
export interface WcaFormElement {

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The name attribute of the form element from WCA.",
     *   "key": "name",
     *   "label": "name",
     *   "minLength": 1,
     *   "required": true
     * }
    */
    ['name']: SingleTextElement;

    /**
     * {
     *   "elementType": "optionselection",
     *   "helpText": "The type attribute of the form element from WCA.",
     *   "key": "type",
     *   "label": "type",
     *   "options": [
     *     {
     *       "label": "text",
     *       "selection": "text"
     *     },
     *     {
     *       "label": "email",
     *       "selection": "email"
     *     },
     *     {
     *       "label": "password",
     *       "selection": "password"
     *     },
     *     {
     *       "label": "radio",
     *       "selection": "radio"
     *     },
     *     {
     *       "label": "checkbox",
     *       "selection": "checkbox"
     *     },
     *     {
     *       "label": "select",
     *       "selection": "select"
     *     }
     *   ],
     *   "required": true
     * }
    */
    ['type']: SingleOptionSelectionElement;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The label for the form element which shows in the UI.",
     *   "key": "label",
     *   "label": "label",
     *   "minLength": 1,
     *   "required": true
     * }
    */
    ['label']: SingleTextElement;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The default value for the form element (often empty).",
     *   "key": "value",
     *   "label": "value",
     *   "required": false
     * }
    */
    ['value']?: SingleTextElement;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The placeholder attribute of the form element, if applicable.",
     *   "key": "placeholder",
     *   "label": "placeholder"
     * }
    */
    ['placeholder']?: SingleTextElement;

    /**
     * {
     *   "elementType": "toggle",
     *   "helpText": "Toggle on if this form element is required to be filled out by the user.",
     *   "key": "isRequired",
     *   "label": "Is required"
     * }
    */
    ['isRequired']?: SingleToggleElement;

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "text",
     *   "fieldLabel": "option",
     *   "helpText": "For checkboxes, radio button groups, and select dropdowns, add each available value from the WCA form elements as an option.",
     *   "key": "option",
     *   "label": "option",
     *   "minimumValues": 0
     * }
    */
    ['option']?: MultiTextElement;
}

export interface WcaFormElementElement extends GroupElement {
    /**
    * Pin the type reference to the well known ID
    */
    typeRef: {
        id: 'e8577a0b-877b-4824-a926-810dcc19d4b8'
    };
}

export interface SingleWcaFormElementElement extends WcaFormElementElement {
    value: WcaFormElement;
}

export interface MultiWcaFormElementElement extends WcaFormElementElement {
    values: WcaFormElement[];
}

/**
 * Tests if the value is of type WcaFormElementElement
 *
 * @param aValue the value to test
 * @return true if the value if of type WcaFormElementElement else false
*/
export function isWcaFormElement(aValue: any): aValue is WcaFormElement {
    return !!aValue
        && isSingleTextElement(aValue[KEY_NAME])
        && isSingleOptionSelectionElement(aValue[KEY_TYPE])
        && isSingleTextElement(aValue[KEY_LABEL])
        && (!aValue[KEY_VALUE] || isSingleTextElement(aValue[KEY_VALUE]))
        && (!aValue[KEY_PLACEHOLDER] || isSingleTextElement(aValue[KEY_PLACEHOLDER]))
        && (!aValue[KEY_IS_REQUIRED] || isSingleToggleElement(aValue[KEY_IS_REQUIRED]))
        && (!aValue[KEY_OPTION] || isMultiTextElement(aValue[KEY_OPTION]))
        ;
}

/**
 * Tests if the value is of type SingleWcaFormElementElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleWcaFormElementElement else false
*/
export function isSingleWcaFormElementElement(aValue: any): aValue is SingleWcaFormElementElement {
    return isSingleGroupElement(aValue) && isWcaFormElement(aValue.value);
}

/**
 * Tests if the value is of type MultiWcaFormElementElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiWcaFormElementElement else false
*/
export function isMultiWcaFormElementElement(aValue: any): aValue is MultiWcaFormElementElement {
    return isMultiGroupElement(aValue) && aValue.values.every(isWcaFormElement);
}

/*
 * @name WCA form element
 * @id e8577a0b-877b-4824-a926-810dcc19d4b8
 */
export interface WcaFormElementType {

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The name attribute of the form element from WCA.",
     *   "key": "name",
     *   "label": "name",
     *   "minLength": 1,
     *   "required": true
     * }
    */
    ['name']: string;

    /**
     * {
     *   "elementType": "optionselection",
     *   "helpText": "The type attribute of the form element from WCA.",
     *   "key": "type",
     *   "label": "type",
     *   "options": [
     *     {
     *       "label": "text",
     *       "selection": "text"
     *     },
     *     {
     *       "label": "email",
     *       "selection": "email"
     *     },
     *     {
     *       "label": "password",
     *       "selection": "password"
     *     },
     *     {
     *       "label": "radio",
     *       "selection": "radio"
     *     },
     *     {
     *       "label": "checkbox",
     *       "selection": "checkbox"
     *     },
     *     {
     *       "label": "select",
     *       "selection": "select"
     *     }
     *   ],
     *   "required": true
     * }
    */
    ['type']: OptionSelection;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The label for the form element which shows in the UI.",
     *   "key": "label",
     *   "label": "label",
     *   "minLength": 1,
     *   "required": true
     * }
    */
    ['label']: string;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The default value for the form element (often empty).",
     *   "key": "value",
     *   "label": "value",
     *   "required": false
     * }
    */
    ['value']?: string;

    /**
     * {
     *   "elementType": "text",
     *   "helpText": "The placeholder attribute of the form element, if applicable.",
     *   "key": "placeholder",
     *   "label": "placeholder"
     * }
    */
    ['placeholder']?: string;

    /**
     * {
     *   "elementType": "toggle",
     *   "helpText": "Toggle on if this form element is required to be filled out by the user.",
     *   "key": "isRequired",
     *   "label": "Is required"
     * }
    */
    ['isRequired']?: boolean;

    /**
     * {
     *   "allowMultipleValues": true,
     *   "elementType": "text",
     *   "fieldLabel": "option",
     *   "helpText": "For checkboxes, radio button groups, and select dropdowns, add each available value from the WCA form elements as an option.",
     *   "key": "option",
     *   "label": "option",
     *   "minimumValues": 0
     * }
    */
    ['option']?: string;
}
