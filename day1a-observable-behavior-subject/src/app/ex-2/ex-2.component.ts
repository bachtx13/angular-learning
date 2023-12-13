import {Component, Inject, OnInit} from '@angular/core';
import {ExObservableService} from "../services/ex-observable.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ex-2',
  templateUrl: './ex-2.component.html',
  styleUrl: './ex-2.component.css'
})
export class Ex2Component implements OnInit{
  private _count: number;

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  constructor(@Inject(ExObservableService) private service: ExObservableService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.service)
    this.service.dataObservable.subscribe((data) => {
      this.count = data
    })
  }

  change(){
    this.service.refresh(100)
  }
  redirect(){
    this.router.navigate(['ex']);
  }
}
