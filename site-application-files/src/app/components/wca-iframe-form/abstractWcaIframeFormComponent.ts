/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Observable
} from 'rxjs/Observable';
import { WcaIframeFormRenderingContext, assertWcaIframeFormRenderingContext, isWcaIframeFormRenderingContext } from './wcaIframeFormRenderingContext';
import { AbstractRenderingComponent, Link, RenderingContext, RenderingContextBinding } from 'ibm-wch-sdk-ng';

/*
 * @name WCA iframe form
 * @id f3ad5fbe-d5b3-457e-a0f4-625e57a5b0a1
 */
abstract class AbstractWcaIframeFormComponent extends AbstractRenderingComponent {

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
     *   "key": "url",
     *   "label": "URL",
     *   "required": true
     * }
     */
    @RenderingContextBinding('link.url')
    readonly onUrl: Observable<Link>;

    /*
     * @see #onUrl
     */
    @RenderingContextBinding()
    readonly url: Link;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "Height of WCA iframe (e.g. 300px, 100%). If not set, the height defaults to 100%.",
     *   "key": "height",
     *   "label": "Height"
     * }
     */
    @RenderingContextBinding('text.height', '')
    readonly onHeight: Observable<string>;

    /*
     * @see #onHeight
     */
    @RenderingContextBinding()
    readonly height: string;

    /*
     * {
     *   "elementType": "text",
     *   "helpText": "Width of Embed code compoenent (e.g. 300px, 100%). If not set, the width defaults to fill available space.",
     *   "key": "width",
     *   "label": "Width"
     * }
     */
    @RenderingContextBinding('text.width', '')
    readonly onWidth: Observable<string>;

    /*
     * @see #onWidth
     */
    @RenderingContextBinding()
    readonly width: string;

    protected constructor() {
        super();
    }
}

/**
* 18acd1c9-888e-4c44-bd2c-a38c5a62bf45
*/
export {
    WcaIframeFormRenderingContext,
    isWcaIframeFormRenderingContext,
    assertWcaIframeFormRenderingContext,
    AbstractWcaIframeFormComponent
};
