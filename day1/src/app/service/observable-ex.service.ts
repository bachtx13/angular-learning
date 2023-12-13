import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ObservableExService {
  private _dataObservable: Subject<number> = new Subject()

  get dataObservable(): Observable<number> {
    return this._dataObservable.asObservable();
  }
  refresh(payload: number){
    console.log(payload)
    this._dataObservable.next(payload)
  }


}
