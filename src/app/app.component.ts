import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  title = 'covid19-estimator';

  covid19EstimatorForm: FormGroup;
  input = {};
  userInput: {} = {};
  userInputValid = false;

  // Will use this to populate select option in the template
  daysOfPeriod = ['days', 'weeks', 'months'];

  ngOnInit() {
    this.covid19EstimatorForm = this.fb.group({
      population: ['', Validators.required],
      timeToElapse: ['', Validators.required],
      periodType: ['', Validators.required],
      reportedCases: ['', Validators.required],
      totalHospitalBeds: ['', Validators.required]
    });
  }

  impactCalculator(inputData) {
    // All covidEstmator function will do all calculations here using the input data object
    return console.log(`Let's print out our form obj: ${inputData}`);
  }

  clearCovid19EstimatorForm() {
    this.covid19EstimatorForm.reset();
  }


  onCalculateImpact() {

    // check if form is not valid
    if (!this.covid19EstimatorForm) {
      return false;
    }
    this.userInputValid = true;
    this.userInput = JSON.stringify(this.covid19EstimatorForm.value);
    this.impactCalculator(this.userInput);
    this.clearCovid19EstimatorForm();
  }


}
