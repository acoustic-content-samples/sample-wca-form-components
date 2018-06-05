/**
 * Do not modify this file, it is auto-generated.
 */
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import {
    SingleLinkElement,
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { KEY_URL, WcaIframeForm, isWcaIframeForm } from './../../elements/wca-iframe-form/wcaIframeFormType';

/*
 * @name WCA iframe form
 * @id f3ad5fbe-d5b3-457e-a0f4-625e57a5b0a1
 */
export interface WcaIframeFormRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: 'f3ad5fbe-d5b3-457e-a0f4-625e57a5b0a1';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'WCA iframe form';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: WcaIframeForm;

    link: {
    /**
     * {
     *   "elementType": "link",
     *   "key": "url",
     *   "label": "URL",
     *   "required": true
     * }
    */
    ['url']: SingleLinkElement;
    };

}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link WcaIframeFormRenderingContext } else false
 */
export function isWcaIframeFormRenderingContext(aContext: RenderingContext): aContext is WcaIframeFormRenderingContext {
    return !!aContext && isWcaIframeForm(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link WcaIframeFormRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link WcaIframeFormRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertWcaIframeFormRenderingContext);
 */
export function assertWcaIframeFormRenderingContext(aContext: RenderingContext): WcaIframeFormRenderingContext {
    // test if the context is as expected
    if (isWcaIframeFormRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('WcaIframeFormRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link WcaIframeFormRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opWcaIframeFormRenderingContext());
 */
export const opWcaIframeFormRenderingContext = () => map<RenderingContext, WcaIframeFormRenderingContext>(assertWcaIframeFormRenderingContext);
