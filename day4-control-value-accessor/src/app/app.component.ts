import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormService} from "./services/form.service";
import {DataModel} from "./interfaces/data-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private formService: FormService) {
  }
  handleClick() {
    this.formService.setFormData(<DataModel>{
      name: "bach"
    })
  }
}
