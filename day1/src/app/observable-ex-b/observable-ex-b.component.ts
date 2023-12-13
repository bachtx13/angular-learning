import {Component, Inject, OnInit} from '@angular/core';
import {count} from "rxjs";
import {ObservableExService} from "../service/observable-ex.service";

@Component({
  selector: 'app-observable-ex-b',
  standalone: true,
  imports: [],
  providers: [ObservableExService],
  templateUrl: './observable-ex-b.component.html',
  styleUrl: './observable-ex-b.component.css'
})
export class ObservableExBComponent implements OnInit{
  private _count: number = 0;

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  constructor(@Inject(ObservableExService) private service: ObservableExService) {
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
