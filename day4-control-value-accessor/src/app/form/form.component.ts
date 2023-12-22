import { Component } from '@angular/core';
import {FormService} from "../services/form.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private formService:FormService) {
    this.formGroup = formService.formGroup;
  }
  formGroup: FormGroup;
}
