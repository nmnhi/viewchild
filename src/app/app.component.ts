import { DemoComponent } from './demo/demo.component';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'viewchild';
  @ViewChild('dobInput')
  dateOfBirth!: ElementRef;
  @ViewChild('ageInput')
  age!: ElementRef;
  @ViewChild(DemoComponent, { static: true }) demoComp!: DemoComponent;
  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth.nativeElement.value
    ).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
  }
}
