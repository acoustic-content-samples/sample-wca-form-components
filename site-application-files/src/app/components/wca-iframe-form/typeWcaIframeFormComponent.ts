/*
Copyright IBM Corporation 2017.
LICENSE: Apache License, Version 2.0
*/
import {
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractWcaIframeFormComponent } from './abstractWcaIframeFormComponent';

/** Useful imports */
// import { map } from 'rxjs/operators/map';
// import { takeUntil } from 'rxjs/operators/takeUntil';
// import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

/*
 * @name WCA iframe form
 * @id f3ad5fbe-d5b3-457e-a0f4-625e57a5b0a1
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-wca-iframe-form-component',
  templateUrl: './typeWcaIframeFormComponent.html',
  styleUrls: ['./typeWcaIframeFormComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeWcaIframeFormComponent extends AbstractWcaIframeFormComponent {

    /*
     * TODO add custom fields here. These fields should be those
     * common to all layouts.
     */

    constructor() {
        super();
        /*
         * TODO initialize your custom fields here, note that
         * you can refer to the values bound via @RenderingContextBinding from
         * your super class.
         *
         * Expose your custom fields as observables in your class
         * and subscribe from the template via the async pipe.
         */

         /*
          * Sample
          *
          * const that = this;
          * const onDestroy = that.onOnDestroy;
          */
    }

}
