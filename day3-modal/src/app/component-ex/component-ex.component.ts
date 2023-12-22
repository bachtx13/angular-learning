import { Component } from '@angular/core';
import {ComponentEx1Component} from "../component-ex1/component-ex1.component";

@Component({
  selector: 'app-component-ex',
  standalone: true,
  imports: [
    ComponentEx1Component
  ],
  templateUrl: './component-ex.component.html',
  styleUrl: './component-ex.component.scss'
})
export class ComponentExComponent {

}
