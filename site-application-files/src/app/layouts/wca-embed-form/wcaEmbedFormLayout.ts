import { LayoutComponent } from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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

	// true if the form is currently submitting
	isLoading: boolean = false;

	// true if the form has been successfully submitted
	isSubmitted: boolean = false;

	// true if the form has a submission error
	hasError: boolean = false;

	/* holds an array of form data created based on the rendering context, each object has this format:
		{
			name: 'EMAIL',                       // the name attribute of the form element from WCA
			type: 'text',                        // the type attrivute of the form element from WCA, one of text | email | password | radio | checkbox | select
			label: 'Email address',              // the label for the form element which shows in the UI
			value: '',                           // the default value for the form element (often an empty string)
			placeholder: 'name@domain.com',      // the placeholder attribute of the form element
			options: ['Clothes','No']            // for radio, select, and checkbox types: an array of string for each radio/option/checkbox value in a group
		}
	*/
	formData: any = [];

	// the angular form to display, based on the data
	form: FormGroup;

	constructor(private http: HttpClient, private fb: FormBuilder) {
		super();

		// initialize an empty form group
		this.form = this.fb.group({});

		// listen for changes in the form
		this.safeSubscribe(this.onFormElements, () => this.createForm() );
	}

	// take the formElements from rendering context and transform them into the simple formData object
	// use FormBuilder to create the angular form based on the given elements
	createForm() {
		this.formData = [];
		const formGroup = {};

		// loop through all the form element definitions and pull out the necessary info
		this.formElements.forEach(context => {

			// create the formData object
			const element = context.elements;
			const formObj = {
				name: element.name.value,
				type: element.type.value.selection,
				label: element.label.value,
				value: element.value.value || '',
				placeholder: element.placeholder.value || '',
				options: element.option.values || [],
				formArray: null,
				isRequired: element.isRequired.value,
				isEmail: element.isEmail.value,
			};

			// checkbox groups should be a form array
			// in addition to adding the array to the form group,
			//		add a reference to the form object definition itself (to allow access from the html template)
			if(formObj.type === 'checkbox') {
				formGroup[formObj.name] = formObj.formArray = this.buildCheckboxArray(formObj.options);

			// everything else is a basic key:value pair
			} else {

				// add any Validators from @angular/forms
				const validators = [];
				if(formObj.isRequired) {
					validators.push(Validators.required);
				}
				if(formObj.isEmail) {
					validators.push(Validators.email);
				}
				
				formGroup[formObj.name] = [ formObj.value, validators ];
			}

			// add the form object to the formData array
			this.formData.push(formObj);

			// assign the new form to the FormGroup class variable
			this.form = this.fb.group(formGroup);
		});
	}

	// take an array of checkbox options and map each one to a control in a FormArray of FormGroups
	buildCheckboxArray(boxes) {
		const formGroups = boxes.map(box => this.fb.group({ label:box, checked:false }) );
		return this.fb.array(formGroups);
	}

	// submit the form to the given POST action URL
	onSubmit(formValues: any) {
		// start loading the form submission
		this.isLoading = true;
		this.hasError = false;

		// extract and reformat the form data
		let postBody = new URLSearchParams();
		for(let name in formValues) {
			const value = formValues[name];

			// checkbox arrays: add each value where checked is true
			if(Array.isArray(value)) {
				value.filter(v => v.checked).forEach(v => postBody.set(name, v.label));

			// add everything else without a null/empty/false value
			} else if (value) {
				postBody.set(name, value)
			}
		}

		// post the data
		const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		this.http.post(this.actionUrl.linkURL, postBody.toString(), { headers: headers }).subscribe(res => {
			this.isLoading = false;
			this.isSubmitted = true;
		}, e => {
			console.error(`Error submitting the WCA form => ${e.name}: ${e.message}`);
			this.isLoading = false;
			this.hasError = true;
		});
	}
}
