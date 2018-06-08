/*
Copyright IBM Corporation 2017.
LICENSE: Apache License, Version 2.0
*/
import { LayoutComponent } from '@ibm-wch-sdk/ng';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TypeWcaIframeFormComponent } from './../../components/wca-iframe-form/typeWcaIframeFormComponent';

@LayoutComponent({
	selector: 'wca-iframe-form-layout'
})
@Component({
  selector: 'app-wca-iframe-form-layout-component',
  templateUrl: './wcaIframeFormLayout.html',
  styleUrls: ['./wcaIframeFormLayout.scss'],
  preserveWhitespaces: false
})

export class WcaIframeFormLayoutComponent extends TypeWcaIframeFormComponent {

	@ViewChild('frame') frameElem: ElementRef;
	iframeHeight: string;
	iframeWidth: string;

	constructor() {
		super();    

		// resize the iframe based on the content item height and width elements
		this.safeSubscribe(this.onHeight, (h) => this.iframeHeight = h ? h : '100%' );
		this.safeSubscribe(this.onWidth, (w) => this.iframeWidth = w ? w : '100%' );
	}

}
