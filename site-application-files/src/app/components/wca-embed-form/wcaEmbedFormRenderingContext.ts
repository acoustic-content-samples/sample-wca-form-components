/**
 * Do not modify this file, it is auto-generated.
 */
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import {
    SingleLinkElement,
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { KEY_ACTION_URL, KEY_FORM_ELEMENTS, KEY_SUBMIT_BUTTON_LABEL, KEY_SUBMIT_MESSAGE, KEY_TERMS, KEY_TITLE, WcaEmbedForm, isWcaEmbedForm } from './../../elements/wca-embed-form/wcaEmbedFormType';

/*
 * @name WCA embed form
 * @id 5f99ae4b-0d9e-4c5b-875d-aaa0a4d1ef33
 */
export interface WcaEmbedFormRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: '5f99ae4b-0d9e-4c5b-875d-aaa0a4d1ef33';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'WCA embed form';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: WcaEmbedForm;

    text: {
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
    };

    link: {
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
    };

    references: {
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
    ['formElements']: RenderingContext[];
    };

}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link WcaEmbedFormRenderingContext } else false
 */
export function isWcaEmbedFormRenderingContext(aContext: RenderingContext): aContext is WcaEmbedFormRenderingContext {
    return !!aContext && isWcaEmbedForm(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link WcaEmbedFormRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link WcaEmbedFormRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertWcaEmbedFormRenderingContext);
 */
export function assertWcaEmbedFormRenderingContext(aContext: RenderingContext): WcaEmbedFormRenderingContext {
    // test if the context is as expected
    if (isWcaEmbedFormRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('WcaEmbedFormRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link WcaEmbedFormRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opWcaEmbedFormRenderingContext());
 */
export const opWcaEmbedFormRenderingContext = () => map<RenderingContext, WcaEmbedFormRenderingContext>(assertWcaEmbedFormRenderingContext);