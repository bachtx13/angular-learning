import {Component, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ModalComponent} from "./modal/modal.component";
import {ComponentExComponent} from "./component-ex/component-ex.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ModalComponent, ComponentExComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'day3-modal';
  //call api

  handleClick1(key: string){
    //call api 1
    //truyen qua form

  }
  handleClick2(key: string){
    //call api 2
  }
}
