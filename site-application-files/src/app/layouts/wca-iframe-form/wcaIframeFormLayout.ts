import { LayoutComponent } from 'ibm-wch-sdk-ng';
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
		this.safeSubscribe(this.onHeight, () => this.resizeIFrame() );
		this.safeSubscribe(this.onWidth, () => this.resizeIFrame() );
	}

	resizeIFrame() {
		this.iframeHeight = this.height ? this.height : '100%';
		this.iframeWidth = this.width ? this.width : '100%';
	}

}
