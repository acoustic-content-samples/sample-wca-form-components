/**
 * Do not modify this file, it is auto-generated.
 */
import { GroupElement, Link, SingleLinkElement, isMultiGroupElement, isSingleGroupElement, isSingleLinkElement } from '@ibm-wch-sdk/ng';

export const KEY_URL = 'url';

/*
 * @name WCA iframe form
 * @id f3ad5fbe-d5b3-457e-a0f4-625e57a5b0a1
 */
export interface WcaIframeForm {

    /**
     * {
     *   "elementType": "link",
     *   "key": "url",
     *   "label": "URL",
     *   "required": true
     * }
    */
    ['url']: SingleLinkElement;
}

export interface WcaIframeFormElement extends GroupElement {
    /**
    * Pin the type reference to the well known ID
    */
    typeRef: {
        id: 'f3ad5fbe-d5b3-457e-a0f4-625e57a5b0a1'
    };
}

export interface SingleWcaIframeFormElement extends WcaIframeFormElement {
    value: WcaIframeForm;
}

export interface MultiWcaIframeFormElement extends WcaIframeFormElement {
    values: WcaIframeForm[];
}

/**
 * Tests if the value is of type WcaIframeFormElement
 *
 * @param aValue the value to test
 * @return true if the value if of type WcaIframeFormElement else false
*/
export function isWcaIframeForm(aValue: any): aValue is WcaIframeForm {
    return !!aValue
        && isSingleLinkElement(aValue[KEY_URL])
        ;
}

/**
 * Tests if the value is of type SingleWcaIframeFormElement
 *
 * @param aValue the value to test
 * @return true if the value if of type SingleWcaIframeFormElement else false
*/
export function isSingleWcaIframeFormElement(aValue: any): aValue is SingleWcaIframeFormElement {
    return isSingleGroupElement(aValue) && isWcaIframeForm(aValue.value);
}

/**
 * Tests if the value is of type MultiWcaIframeFormElement
 *
 * @param aValue the value to test
 * @return true if the value if of type MultiWcaIframeFormElement else false
*/
export function isMultiWcaIframeFormElement(aValue: any): aValue is MultiWcaIframeFormElement {
    return isMultiGroupElement(aValue) && aValue.values.every(isWcaIframeForm);
}

/*
 * @name WCA iframe form
 * @id f3ad5fbe-d5b3-457e-a0f4-625e57a5b0a1
 */
export interface WcaIframeFormType {

    /**
     * {
     *   "elementType": "link",
     *   "key": "url",
     *   "label": "URL",
     *   "required": true
     * }
    */
    ['url']: Link;
}
