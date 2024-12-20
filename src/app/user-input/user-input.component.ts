import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number
  }>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDurationInYears = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment),
      duration: Number(this.enteredDurationInYears),
      expectedReturn: Number(this.enteredExpectedReturn),
      annualInvestment: Number(this.enteredAnnualInvestment)
    });
  }
}