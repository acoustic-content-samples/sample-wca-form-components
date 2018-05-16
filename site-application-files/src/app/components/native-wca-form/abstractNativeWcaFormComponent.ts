/**
 * Do not modify this file, it is auto-generated.
 */
import {
    Observable
} from 'rxjs/Observable';
import { NativeWcaFormRenderingContext, assertNativeWcaFormRenderingContext, isNativeWcaFormRenderingContext } from './nativeWcaFormRenderingContext';
import { AbstractRenderingComponent, RenderingContext } from 'ibm-wch-sdk-ng';

/*
 * @name native WCA form
 * @id 7f4a7353-5132-466c-859c-470e931b0aad
 */
abstract class AbstractNativeWcaFormComponent extends AbstractRenderingComponent {

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