/**
 * Do not modify this file, it is auto-generated.
 */
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import {
    RenderingContext
} from 'ibm-wch-sdk-ng';
import { NativeWcaForm, isNativeWcaForm } from './../../elements/native-wca-form/nativeWcaFormType';

/*
 * @name native WCA form
 * @id 7f4a7353-5132-466c-859c-470e931b0aad
 */
export interface NativeWcaFormRenderingContext extends RenderingContext {

    /*
     * The ID of the content type this item belongs to.
     */
    typeId: '7f4a7353-5132-466c-859c-470e931b0aad';

    /*
     * this is the link to the content type document this content is based on.
     */
    type: 'native WCA form';

    /*
     * The classification defines the document type. For content items, all documents are classified as \"content\".
     */
    classification: 'content';

    /*
     * Defined by the type and capture in the schema given by the type,
     *  in a real content, this property will be filled with more information.
     */
    elements: NativeWcaForm;

}

/** Validates that the context is indeed of the desired type
 *
 * @param aContext instance of the {@link RenderingContext} to check
 * @return true if the context is a {@link NativeWcaFormRenderingContext } else false
 */
export function isNativeWcaFormRenderingContext(aContext: RenderingContext): aContext is NativeWcaFormRenderingContext {
    return !!aContext && isNativeWcaForm(aContext.elements);
}

/** Provides a type assertion that can be used to validate and convert a generic {@link RenderingContext}
 * info a {@link NativeWcaFormRenderingContext }
 *
 * @param aContext instance of the rendering context to check
 * @return the {@link NativeWcaFormRenderingContext } version of the {@link RenderingContext} or an exception
 *
 * @example this.onRenderingContext.map(assertNativeWcaFormRenderingContext);
 */
export function assertNativeWcaFormRenderingContext(aContext: RenderingContext): NativeWcaFormRenderingContext {
    // test if the context is as expected
    if (isNativeWcaFormRenderingContext(aContext)) {
        return aContext;
    }
    // type failure
    throw new TypeError('NativeWcaFormRenderingContext');
}

/** Operator to convert a {@link RenderingContext} into a {@link NativeWcaFormRenderingContext } using a pipe.
 *
 * @example this.onRenderingContext.pipe(opNativeWcaFormRenderingContext());
 */
export const opNativeWcaFormRenderingContext = () => map<RenderingContext, NativeWcaFormRenderingContext>(assertNativeWcaFormRenderingContext);