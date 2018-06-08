/*
Copyright IBM Corporation 2017.
LICENSE: Apache License, Version 2.0
*/
import {
    RenderingContext
} from '@ibm-wch-sdk/ng';
import { Component } from '@angular/core';
import { AbstractWcaEmbedFormComponent } from './abstractWcaEmbedFormComponent';

/** Useful imports */
// import { map } from 'rxjs/operators/map';
// import { takeUntil } from 'rxjs/operators/takeUntil';
// import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

/*
 * @name WCA embed form
 * @id 5f99ae4b-0d9e-4c5b-875d-aaa0a4d1ef33
 */
/* TODO uncomment this if you plan to use the component standalone, i.e. not as the basis of a layout.
@Component({
  selector: 'app-type-wca-embed-form-component',
  templateUrl: './typeWcaEmbedFormComponent.html',
  styleUrls: ['./typeWcaEmbedFormComponent.scss'],
  preserveWhitespaces: false
})
*/
export class TypeWcaEmbedFormComponent extends AbstractWcaEmbedFormComponent {

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
