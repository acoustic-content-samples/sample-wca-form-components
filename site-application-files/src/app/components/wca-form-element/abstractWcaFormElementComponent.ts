/**
 * Do not modify this file, it is auto-generated.
 */
/*
Copyright IBM Corporation 2017.
LICENSE: Apache License, Version 2.0
*/
import {
    Observable
} from 'rxjs/Observable';
import { WcaFormElementRenderingContext, assertWcaFormElementRenderingContext, isWcaFormElementRenderingContext } from './wcaFormElementRenderingContext';
import { AbstractRenderingComponent, OptionSelection, RenderingContext, RenderingContextBinding } from '@ibm-wch-sdk/ng';

/*
 * @name WCA form element
 * @id e8577a0b-877b-4824-a926-810dcc19d4b8
 */
abstract class AbstractWcaFormElementComponent extends AbstractRenderingComponent {

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
     *   "helpText": "The name attribute of the form element from WCA.",
     *   "key": "name",
     *   "label": "name",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.name')
    readonly onName: Observable<string>;

    /*
     * @see #onName
     */
    @RenderingContextBinding()
    readonly name: string;

    /*
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
    @RenderingContextBinding('optionselection.type')
    readonly onType: Observable<OptionSelection>;

    /*
     * @see #onType
     */
    @RenderingContextBinding()
    readonly type: OptionSelection;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "The label for the form element which shows in the UI.",
     *   "key": "label",
     *   "label": "label",
     *   "minLength": 1,
     *   "required": true
     * }
     */
    @RenderingContextBinding('text.label')
    readonly onLabel: Observable<string>;

    /*
     * @see #onLabel
     */
    @RenderingContextBinding()
    readonly label: string;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "The default value for the form element (often empty).",
     *   "key": "value",
     *   "label": "value",
     *   "required": false
     * }
     */
    @RenderingContextBinding('text.value', '')
    readonly onValue: Observable<string>;

    /*
     * @see #onValue
     */
    @RenderingContextBinding()
    readonly value: string;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "The placeholder attribute of the form element, if applicable.",
     *   "key": "placeholder",
     *   "label": "placeholder"
     * }
     */
    @RenderingContextBinding('text.placeholder', '')
    readonly onPlaceholder: Observable<string>;

    /*
     * @see #onPlaceholder
     */
    @RenderingContextBinding()
    readonly placeholder: string;

    /*
     * {
     *   "elementType": "toggle",
     *   "helpText": "Toggle on if this form element is required to be filled out by the user.",
     *   "key": "isRequired",
     *   "label": "Is required"
     * }
     */
    @RenderingContextBinding('toggle.isRequired', false)
    readonly onIsRequired: Observable<boolean>;

    /*
     * @see #onIsRequired
     */
    @RenderingContextBinding()
    readonly isRequired: boolean;

    /*
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
    @RenderingContextBinding('texts.option', [])
    readonly onOption: Observable<string[]>;

    /*
     * @see #onOption
     */
    @RenderingContextBinding()
    readonly option: string[];

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    WcaFormElementRenderingContext,
    isWcaFormElementRenderingContext,
    assertWcaFormElementRenderingContext,
    AbstractWcaFormElementComponent
};
