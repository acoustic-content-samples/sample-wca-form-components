import {
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractWcaFormElementComponent } from './abstractWcaFormElementComponent';

/** Useful imports */
// import { map } from 'rxjs/operators/map';
// import { takeUntil } from 'rxjs/operators/takeUntil';
// import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

/*
 * @name WCA form element
 * @id e8577a0b-877b-4824-a926-810dcc19d4b8
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-wca-form-element-component',
  templateUrl: './typeWcaFormElementComponent.html',
  styleUrls: ['./typeWcaFormElementComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeWcaFormElementComponent extends AbstractWcaFormElementComponent {

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
