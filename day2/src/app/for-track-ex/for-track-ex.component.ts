import {Component, TrackByFunction} from '@angular/core';
import {IDataEx} from "../models/data-ex";

@Component({
  selector: 'app-for-track-ex',
  templateUrl: './for-track-ex.component.html',
  styleUrl: './for-track-ex.component.css'
})
export class ForTrackExComponent{
  dataListParent: IDataEx[] = [
    {
      id: 1,
      title: "Bach"
    },
    {
      id: 2,
      title: "Yeu"
    },
    {
      id: 3,
      title: "Ha"
    },
  ]
  dataList: IDataEx[] = this.dataListParent

  dataTrackBy(_: number, item: IDataEx) : number{
    return item.id
  }
  changeData(){
    this.dataList = this.dataListParent.map(data => {
      return {...data, title: data.title + " changed"}
    })
  }
  deleteData(index: number){
    this.dataListParent.splice(index, 1)
    this.changeData()
  }
}
