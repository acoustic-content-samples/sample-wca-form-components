import { LayoutComponent } from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { TypeWcaEmbedFormComponent } from './../../components/wca-embed-form/typeWcaEmbedFormComponent';

@LayoutComponent({
	selector: 'wca-embed-form-layout'
})
@Component({
  selector: 'app-wca-embed-form-layout-component',
  templateUrl: './wcaEmbedFormLayout.html',
  styleUrls: ['./wcaEmbedFormLayout.scss'],
  preserveWhitespaces: false
})

export class WcaEmbedFormLayoutComponent extends TypeWcaEmbedFormComponent {

	// true if the form has been successfully submitted
	isSubmitted: boolean = false;

	constructor() {
		super();
	}

	// update status on submit
	onSubmit() {
		this.isSubmitted = true;
	}
}
