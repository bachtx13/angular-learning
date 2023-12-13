import {Component, Inject} from '@angular/core';
import {ExObservableService} from "../../services/ex-observable.service";

@Component({
  standalone: true,
  selector: 'app-ex-a',
  templateUrl: './ex-a.component.html',
  styleUrl: './ex-a.component.css'
})
export class ExAComponent {
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

  increment(){
    this.service.refresh(this.count + 1)
    console.log(this.service.dataObservable)
  }
}
