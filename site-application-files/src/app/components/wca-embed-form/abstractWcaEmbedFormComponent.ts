/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Observable
} from 'rxjs/Observable';
import { WcaEmbedFormRenderingContext, assertWcaEmbedFormRenderingContext, isWcaEmbedFormRenderingContext } from './wcaEmbedFormRenderingContext';
import { AbstractRenderingComponent, Link, RenderingContext, RenderingContextBinding } from 'ibm-wch-sdk-ng';

/*
 * @name WCA embed form
 * @id 5f99ae4b-0d9e-4c5b-875d-aaa0a4d1ef33
 */
abstract class AbstractWcaEmbedFormComponent extends AbstractRenderingComponent {

    /**
    * Strongly typed stream of the rendering contexts
    */
    readonly onRenderingContext: Observable<RenderingContext>;

    /**
    * Strongly typed rendering context
    */
    renderingContext: RenderingContext;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "This text displays above the form.",
     *   "key": "title",
     *   "label": "Title"
     * }
     */
    @RenderingContextBinding('text.title', '')
    readonly onTitle: Observable<string>;

    /*
     * @see #onTitle
     */
    @RenderingContextBinding()
    readonly title: string;

    /*
     * {
     *   "elementType": "link",
     *   "helpText": "This is the POST action URL found on the WCA form HTML.",
     *   "key": "actionUrl",
     *   "label": "Action URL",
     *   "required": true
     * }
     */
    @RenderingContextBinding('link.actionUrl')
    readonly onActionUrl: Observable<Link>;

    /*
     * @see #onActionUrl
     */
    @RenderingContextBinding()
    readonly actionUrl: Link;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "This text shows on the button which submits the form.",
     *   "key": "submitButtonLabel",
     *   "label": "Submit button label",
     *   "required": false
     * }
     */
    @RenderingContextBinding('text.submitButtonLabel', '')
    readonly onSubmitButtonLabel: Observable<string>;

    /*
     * @see #onSubmitButtonLabel
     */
    @RenderingContextBinding()
    readonly submitButtonLabel: string;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "This text shows above the submit form button, and can be used to show terms, instructions, or any additional information to the user.",
     *   "key": "terms",
     *   "label": "Terms"
     * }
     */
    @RenderingContextBinding('text.terms', '')
    readonly onTerms: Observable<string>;

    /*
     * @see #onTerms
     */
    @RenderingContextBinding()
    readonly terms: string;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "This message will be shown to the user upon submission of the form. It shows whether or not the request was successful.",
     *   "key": "submitMessage",
     *   "label": "Submit message"
     * }
     */
    @RenderingContextBinding('text.submitMessage', '')
    readonly onSubmitMessage: Observable<string>;

    /*
     * @see #onSubmitMessage
     */
    @RenderingContextBinding()
    readonly submitMessage: string;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "Toggle this on if you would like a new browser tab to open and display database results from WCA upon form submission. Otherwise, the results will open in the current browser window.",
     *   "key": "openResultsTab",
     *   "label": "Open results tab",
     *   "statement": "Turn on to open WCA form results in a new tab."
     * }
     */
    @RenderingContextBinding('toggle.openResultsTab', false)
    readonly onOpenResultsTab: Observable<boolean>;

    /*
     * @see #onOpenResultsTab
     */
    @RenderingContextBinding()
    readonly openResultsTab: boolean;

    /*
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
    @RenderingContextBinding('references.formElements')
    readonly onFormElements: Observable<RenderingContext[]>;

    /*
     * @see #onFormElements
     */
    @RenderingContextBinding()
    readonly formElements: RenderingContext[];

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    WcaEmbedFormRenderingContext,
    isWcaEmbedFormRenderingContext,
    assertWcaEmbedFormRenderingContext,
    AbstractWcaEmbedFormComponent
};
