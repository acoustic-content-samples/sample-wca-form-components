/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Observable
} from 'rxjs/Observable';
import { IframeWcaFormRenderingContext, assertIframeWcaFormRenderingContext, isIframeWcaFormRenderingContext } from './iframeWcaFormRenderingContext';
import { AbstractRenderingComponent, Link, RenderingContext, RenderingContextBinding } from 'ibm-wch-sdk-ng';

/*
 * @name iframe WCA form
 * @id b2ed83c3-9ec2-48ff-9101-b008c5ced64b
 */
abstract class AbstractIframeWcaFormComponent extends AbstractRenderingComponent {

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
     *   "elementType": "link",
     *   "key": "source",
     *   "label": "source",
     *   "required": true
     * }
     */
    @RenderingContextBinding('link.source')
    readonly onSource: Observable<Link>;

    /*
     * @see #onSource
     */
    @RenderingContextBinding()
    readonly source: Link;

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    IframeWcaFormRenderingContext,
    isIframeWcaFormRenderingContext,
    assertIframeWcaFormRenderingContext,
    AbstractIframeWcaFormComponent
};