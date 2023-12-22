import {Component, forwardRef, OnChanges, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {noop} from "rxjs";

@Component({
  selector: 'app-custom-input',
  standalone: true,
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnChanges, ControlValueAccessor{
  onChange: (value: string) => void = noop;
  onTouch: () => void = noop;

  disabled = false;
  value = '';

  registerOnChange(fn: (value: string) => void): void {
    // console.log(fn)
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    console.log(fn)
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    // console.log(value)
    this.value = value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
