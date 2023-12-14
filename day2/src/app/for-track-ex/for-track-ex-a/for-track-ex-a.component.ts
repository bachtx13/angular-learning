import {Component, Input, OnInit} from '@angular/core';
import {IDataEx} from "../../models/data-ex";

@Component({
  selector: 'app-for-track-ex-a',
  templateUrl: './for-track-ex-a.component.html',
  styleUrl: './for-track-ex-a.component.css'
})
export class ForTrackExAComponent implements OnInit{
  @Input() data?: IDataEx

  ngOnInit(): void {
    console.log("render" + this.data?.id)
  }

}
