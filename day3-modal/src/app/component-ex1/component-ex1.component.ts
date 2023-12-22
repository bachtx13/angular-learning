import {Component} from '@angular/core';
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-component-ex1',
  standalone: true,
  imports: [],
  templateUrl: './component-ex1.component.html',
  styleUrl: './component-ex1.component.scss'
})
export class ComponentEx1Component {
  constructor(private modalService: ModalService) {
  }

  handleClick() {
    this.modalService.open("create-modal-key")
  }
}
