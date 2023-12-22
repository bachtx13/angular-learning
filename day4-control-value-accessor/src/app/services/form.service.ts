import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DataModel} from "../interfaces/data-model";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formGroup: FormGroup = this.initForm();

  constructor(private formBuilder: FormBuilder) {
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control('aaaa')
    })
  }
  setFormData(data: DataModel){
    this.formGroup.controls['name'].setValue(data.name)
  }
}
