import { LayoutComponent } from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeWcaFormElementComponent } from './../../components/wca-form-element/typeWcaFormElementComponent';

@LayoutComponent({
    selector: 'wca-form-element-layout'
})
@Component({
  selector: 'app-wca-form-element-layout-component',
  templateUrl: './wcaFormElementLayout.html',
  styleUrls: ['./wcaFormElementLayout.scss'],
  preserveWhitespaces: false
})

export class WcaFormElementLayoutComponent extends TypeWcaFormElementComponent {

    constructor() {
        super();
    }

}
