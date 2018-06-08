/**
 * Do not modify this file, it is auto-generated.
 */
/*
Copyright IBM Corporation 2017.
LICENSE: Apache License, Version 2.0
*/
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import {
    OptionSelection,
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { KEY_IS_REQUIRED, KEY_LABEL, KEY_NAME, KEY_OPTION, KEY_PLACEHOLDER, KEY_TYPE, KEY_VALUE, WcaFormElement, isWcaFormElement } from './../../elements/wca-form-element/wcaFormElementType';

/*
 * @name WCA form element
 * @id e8577a0b-877b-4824-a926-810dcc19d4b8
 */
export interface WcaFormElementRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: 'e8577a0b-877b-4824-a926-810dcc19d4b8';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'WCA form element';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: WcaFormElement;

    text: {
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
    };

    optionselection: {
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
    };

    toggle: {
    /**
     * {
     *   "elementType": "toggle",
     *   "helpText": "Toggle on if this form element is required to be filled out by the user.",
     *   "key": "isRequired",
     *   "label": "Is required"
     * }
    */
    ['isRequired']?: boolean;
    };

    texts: {
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
    ['option']?: string[];
    };

}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link WcaFormElementRenderingContext } else false
 */
export function isWcaFormElementRenderingContext(aContext: RenderingContext): aContext is WcaFormElementRenderingContext {
    return !!aContext && isWcaFormElement(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link WcaFormElementRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link WcaFormElementRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertWcaFormElementRenderingContext);
 */
export function assertWcaFormElementRenderingContext(aContext: RenderingContext): WcaFormElementRenderingContext {
    // test if the context is as expected
    if (isWcaFormElementRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('WcaFormElementRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link WcaFormElementRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opWcaFormElementRenderingContext());
 */
export const opWcaFormElementRenderingContext = () => map<RenderingContext, WcaFormElementRenderingContext>(assertWcaFormElementRenderingContext);
