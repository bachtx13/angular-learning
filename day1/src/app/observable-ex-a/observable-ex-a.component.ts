import {Component, Inject, OnInit} from '@angular/core';
import {count} from "rxjs";
import {ObservableExService} from "../service/observable-ex.service";

@Component({
  selector: 'app-observable-ex-a',
  standalone: true,
  imports: [],
  templateUrl: './observable-ex-a.component.html',
  styleUrl: './observable-ex-a.component.css',
  providers: [ObservableExService]
})
export class ObservableExAComponent implements OnInit{
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

  increment(){
    this.service.refresh(this.count + 1)
    console.log(this.service.dataObservable)
  }

}
