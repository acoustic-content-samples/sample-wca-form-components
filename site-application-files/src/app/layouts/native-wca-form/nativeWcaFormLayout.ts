import { LayoutComponent } from 'ibm-wch-sdk-ng';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TypeNativeWcaFormComponent } from './../../components/native-wca-form/typeNativeWcaFormComponent';

/** Useful imports */
// import { map } from 'rxjs/operators/map';
// import { takeUntil } from 'rxjs/operators/takeUntil';
// import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

/*
 * @name nativeWcaFormLayout
 * @id native-wca-form-layout
 */
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

	// true if the form is currently submitting
	loading: boolean = false;

	// the form data
	form: FormGroup;

	// the form's action URL:
	formActionUrl: String = 'http://www.pages00.net/orgforjoshuatopel/sports/sign-up'; // TODO 'http://www.sample.net/org/sports/sign-up';

	// 'New Player' options used for the 'COLUMN92' radio buttons
	playerAnswers: String[] = [
		'Yes',
		'No'
	];

	// 'Interest' list used for the 'COLUMN111' checkboxes
	interestList = [
		{ name: 'Team Sports', checked: false },
		{ name: 'Roller Sports', checked: true },
		{ name: 'Fishing & Hunting', checked: false },
		{ name: 'Games & Toys', checked: true },
		{ name: 'Golf & Racket Sports', checked: false }
	];

	constructor(private fb: FormBuilder) {
		super();
		this.createForm();
	}

	createForm() {
		this.form = this.fb.group({
			COLUMN22: '', // type: text, label: First Name
			COLUMN28: '', // type: text, label: Last Name
			EMAIL: ['', [ Validators.required, Validators.email ]], // type: text, label: Email
			COLUMN92: 'Yes', // type: radio, label: New Player
			COLUMN111: this.buildCheckboxArray(this.interestList)
		});
	}

	buildCheckboxArray(boxes) {
		const formGroups = boxes.map(box => this.fb.group(box) );
		return this.fb.array(formGroups);
	}

	get COLUMN111(): FormArray {
		return this.form.get('COLUMN111') as FormArray;
	};

	onSubmit(form: any) {
		// start loading the form submission
		this.loading = true;

		// extract all the form info
		const firstName = this.form.get('COLUMN22').value;
		const lastName = this.form.get('COLUMN28').value;
		const email = this.form.get('EMAIL').value;
		const newPlayer = this.form.get('COLUMN92').value;
		const interests = this.form.get('COLUMN111') as FormArray;

		console.warn(`first ${firstName} last ${lastName} email ${email} new ${newPlayer} interests ${interests}`);
		console.warn(this.form);
	}
}
