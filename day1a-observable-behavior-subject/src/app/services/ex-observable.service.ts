import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExObservableService {
  private _dataObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  currentData = this.dataObservable;

  get dataObservable(): Observable<number> {
    return this._dataObservable.asObservable();
  }
  refresh(payload: number){
    console.log(this._dataObservable.getValue())

    this._dataObservable.next(payload)
  }
  constructor() { }
}
