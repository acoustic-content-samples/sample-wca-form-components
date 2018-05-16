/**
 * Do not modify this file, it is auto-generated.
 */
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import {
    SingleLinkElement,
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { IframeWcaForm, KEY_SOURCE, isIframeWcaForm } from './../../elements/iframe-wca-form/iframeWcaFormType';

/*
 * @name iframe WCA form
 * @id b2ed83c3-9ec2-48ff-9101-b008c5ced64b
 */
export interface IframeWcaFormRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: 'b2ed83c3-9ec2-48ff-9101-b008c5ced64b';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'iframe WCA form';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: IframeWcaForm;

    link: {
    /**
     * {
     *   "elementType": "link",
     *   "key": "source",
     *   "label": "source",
     *   "required": true
     * }
    */
    ['source']: SingleLinkElement;
    };

}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link IframeWcaFormRenderingContext } else false
 */
export function isIframeWcaFormRenderingContext(aContext: RenderingContext): aContext is IframeWcaFormRenderingContext {
    return !!aContext && isIframeWcaForm(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link IframeWcaFormRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link IframeWcaFormRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertIframeWcaFormRenderingContext);
 */
export function assertIframeWcaFormRenderingContext(aContext: RenderingContext): IframeWcaFormRenderingContext {
    // test if the context is as expected
    if (isIframeWcaFormRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('IframeWcaFormRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link IframeWcaFormRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opIframeWcaFormRenderingContext());
 */
export const opIframeWcaFormRenderingContext = () => map<RenderingContext, IframeWcaFormRenderingContext>(assertIframeWcaFormRenderingContext);