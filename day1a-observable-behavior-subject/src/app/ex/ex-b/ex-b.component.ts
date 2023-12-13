import {Component, Inject} from '@angular/core';
import {ExObservableService} from "../../services/ex-observable.service";

@Component({
  standalone: true,
  selector: 'app-ex-b',
  templateUrl: './ex-b.component.html',
  styleUrl: './ex-b.component.css'
})
export class ExBComponent {
  private _count: number;

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  constructor(@Inject(ExObservableService) private service: ExObservableService) {
  }

  ngOnInit(): void {
    console.log(this.service)
    this.service.dataObservable.subscribe((data) => {
      this.count = data
    })
  }

  decrement(){
    this.service.refresh(this.count - 1)
  }
}
