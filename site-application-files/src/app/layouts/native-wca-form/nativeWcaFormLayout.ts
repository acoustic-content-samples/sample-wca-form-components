import { LayoutComponent } from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TypeNativeWcaFormComponent } from './../../components/native-wca-form/typeNativeWcaFormComponent';

@LayoutComponent({
	selector: 'native-wca-form-layout'
})
@Component({
  selector: 'app-native-wca-form-layout-component',
  templateUrl: './nativeWcaFormLayout.html',
  styleUrls: ['./nativeWcaFormLayout.scss'],
  preserveWhitespaces: false
})

export class NativeWcaFormLayoutComponent extends TypeNativeWcaFormComponent {

	// true if the form is currently submitting or has a submission error
	isLoading: boolean = false;
	hasError: boolean = false;

	// holds the form data
	form: FormGroup;

	// the form's action URL:
	formActionUrl: String = 'http://www.pages00.net/orgforjoshuatopel/sports/sign-up'; // TODO 'http://www.sample.net/org/sports/sign-up';

	/* an array of the form input elements with the following format:
		{
			name: 'EMAIL',                       // REQUIRED: the name attribute of the form element from WCA
			type: 'text',                        // REQUIRED: the type attrivute of the form element from WCA, one of text | email | password | radio | checkbox | select
			label: 'Email address',              // REQUIRED: the label for the form element which shows in the UI
			value: '',                           // REQUIRED: the default value for the form element (often an empty string)
			placeholder: 'name@domain.com',      // OPTIONAL: the placeholder attribute of the form element
			validators: [ Validators.required ], // OPTIONAL: an array of Validators from @angular/forms
			options: [{                          // REQUIRED for radio and select types: an array of string values for each radio/option in a group
				label: 'Yes',         // REQUIRED: the label for the radio/option which shows in the UI
				value: 'yes'          // REQUIRED: the value for the radio/option, which is returned in the form POST when selected (often the same as the label in WCA)
			}],
			options: [{                          // REQUIRED for checkbox types: an array of information objects for each checkbox in a group
				label: 'Clothing',    // REQUIRED: the label for the checkbox which shows in the UI
				value: 'clothes',     // REQUIRED: the value for the checkbox, which is returned in the form POST when checked=true (often the same as the label in WCA)
				checked: true | false // REQUIRED: the default value of the checkbox (true=checked, false=unchecked)
			}]
		}
	*/
	formElements: any = [
		{ name: 'COLUMN22',  type: 'text', 	   label: 'First Name', value: '' },
		{ name: 'COLUMN28',  type: 'text', 	   label: 'Last Name',  value: '' },
{ name: 'pw',  type: 'password', 	   label: 'Password', value: '' },
		{ name: 'EMAIL', 	 type: 'email',    label: 'Email',      value: '',    placeholder: 'name@domain.com', validators: [ Validators.required, Validators.email ] },
		{ name: 'COLUMN92',  type: 'radio',    label: 'New Player', value: 'Yes', options: [
			{ label: 'Yes', value: 'Yes' },
			{ label: 'No', value: 'No' }
		]},
		{ name: 'COLUMN111', type: 'checkbox', label: 'Interests',  value: '',    options: [
			{ label: 'Team Sports',          value: 'Team Sports',          checked: false },
			{ label: 'Roller Sports',        value: 'Roller Sports',        checked: true },
			{ label: 'Fishing & Hunting',    value: 'Fishing & Hunting',    checked: false },
			{ label: 'Games & Toys',         value: 'Games & Toys',         checked: true },
			{ label: 'Golf & Racket Sports', value: 'Golf & Racket Sports', checked: false }
		]}
	];

	constructor(private fb: FormBuilder) {
		super();
		this.createForm();
	}

	// use FormBuilder to create the angular form based on the given elements
	createForm() {
		const formGroup = {};

		// loop through all the form element definitions to add them to the form group
		this.formElements.forEach(element => {

			// checkbox groups should be a form array
			// in addition to adding the array to the form group,
			//		add a reference to the form element definition (to allow access from the html template)
			if(element.type === 'checkbox') {
				formGroup[element.name] = element.formArray = this.buildCheckboxArray(element.options);

			// some elements include validators
			} else if (element.validators) {
				formGroup[element.name] = [element.value, element.validators];

			// everything else is a basic key:value pair
			} else {
				formGroup[element.name] = element.value;
			}
		});

		// assign the new form to the class variable
		this.form = this.fb.group(formGroup);
	}

	// take an array of checkbox options and map each one to a control in a FormArray of FormGroups
	buildCheckboxArray(boxes) {
		const formGroups = boxes.map(box => this.fb.group(box) );
		return this.fb.array(formGroups);
	}

	// submit the form to the given POST action URL
	onSubmit(form: any) {
		// start loading the form submission
		this.isLoading = true;

		// extract and reformat all the form data
		const newPlayer = this.form.get('COLUMN92').value;
		const interests = this.form.get('COLUMN111') as FormArray;
	}
}
