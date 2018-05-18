/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Observable
} from 'rxjs/Observable';
import { NativeWcaFormRenderingContext, assertNativeWcaFormRenderingContext, isNativeWcaFormRenderingContext } from './nativeWcaFormRenderingContext';
import { AbstractRenderingComponent, RenderingContext, RenderingContextBinding } from 'ibm-wch-sdk-ng';

/*
 * @name native WCA form
 * @id 7f4a7353-5132-466c-859c-470e931b0aad
 */
abstract class AbstractNativeWcaFormComponent extends AbstractRenderingComponent {

    /**
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Title",
     *   "key": "title",
     *   "label": "Title"
     * }
     */
    @RenderingContextBinding('title.text', '')
    readonly onTitle: Observable<string>;

    /**
     * @see #onTitle
     */
    @RenderingContextBinding()
    readonly title: string;

    /**
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Submit button label",
     *   "key": "submitButtonLabel",
     *   "label": "Submit button label"
     * }
     */
    @RenderingContextBinding('submitButtonLabel.text', '')
    readonly onSubmitButtonLabel: Observable<string>;

    /**
     * @see #onSubmitButtonLabel
     */
    @RenderingContextBinding()
    readonly submitButtonLabel: string;

    /**
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Terms",
     *   "key": "terms",
     *   "label": "Terms"
     * }
     */
    @RenderingContextBinding('terms.text', '')
    readonly onTerms: Observable<string>;

    /**
     * @see #onTerms
     */
    @RenderingContextBinding()
    readonly terms: string;

    /**
     * {
     *   "elementType": "text",
     *   "fieldLabel": "Error message",
     *   "key": "errorMessage",
     *   "label": "Error message"
     * }
     */
    @RenderingContextBinding('errorMessage.text', '')
    readonly onErrorMessage: Observable<string>;

    /**
     * @see #onErrorMessage
     */
    @RenderingContextBinding()
    readonly errorMessage: string;

    /**
    * Strongly typed stream of the rendering contexts
    */
    readonly onRenderingContext: Observable<RenderingContext>;

    /**
    * Strongly typed rendering context
    */
    renderingContext: RenderingContext;

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    NativeWcaFormRenderingContext,
    isNativeWcaFormRenderingContext,
    assertNativeWcaFormRenderingContext,
    AbstractNativeWcaFormComponent
};
