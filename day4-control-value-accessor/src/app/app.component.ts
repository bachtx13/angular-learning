import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'control-value-accessor';
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('Bach')
  })

  handleNameInput() {
    console.log(this.formGroup)
  }
}
