import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup! : FormGroup;
  isDisable!: boolean;

  

  title = 'angular-mat-select-app';

  selected: string | undefined;

  currencies = [
    { value: 'us', text: 'U.S. Dollar $' },
    { value: 'euro', text: 'Euro €' },
    { value: 'yen', text: 'Japanese Yen ¥' },
    { value: 'pound', text: 'Pounds £' },
    { value: 'inr', text: 'Indian Rupee ₹' }
  ];

  countryArray: any = ['Ukraine', 'USA', 'China'];
	stateArray: any = [];
	citiesArray: any = [];
	// constructor(private apiHandler: ApiHandlerService) {}

 createForm() {
  this.formGroup = new FormGroup({
    country: new FormControl(),
    state: new FormControl(),
    city: new FormControl()
 });

 }

	ngOnInit() {
    
    this.createForm();
    this.isDisable = true;
		// this.countryArray = [];
		// this.apiHandler.getApiRequest(environment.getCounties).subscribe((data) => {
		// 	data.forEach((item) => {
		// 		this.countryArray.push(item.country_name);
		// 	});
		// });
	}

	getStateByCountry(country: string) {
    //console.log(country)
	//this.stateArray = ['sdfsdf','sdfsadfds','dddddddd'];
	if (country == 'Ukraine')
	{
		this.citiesArray = ['Kyiv', 'Lviv'];
		this.isDisable = false;
	}
	else
	{
		this.citiesArray = ['Вашингтон', 'Техас'];
		this.isDisable = false;
	}
		// this.stateArray = [];
		// this.apiHandler.getApiRequest(environment.getStates + country).subscribe((data) => {
		// 	data.forEach((item) => {
		// 		this.stateArray.push(item.state_name);
		// 	});
		// });
	}

	getCityByState(state: string) {
    console.log(state)
		// this.citiesArray = [];
		// this.apiHandler.getApiRequest(environment.getCity + state).subscribe((data) => {
		// 	data.forEach((item) => {
		// 		this.citiesArray.push(item.city_name);
		// 	});
		// });
	}
}
