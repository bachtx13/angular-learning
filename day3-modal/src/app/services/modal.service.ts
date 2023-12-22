import {Injectable} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() {
  }

  private modalList: ModalComponent[] = []

  add(modal: ModalComponent) {
    const isKeyExists = this.modalList.some(modal => modal.key === modal.key);
    if (isKeyExists) {
      throw new Error("Key already exists");
    }
    this.modalList.push(modal)
  }
  open(key: string){
    this.modalList.find(modal => modal.key === key)?.open()
  }
  remove(modalToRemove: ModalComponent){
    this.modalList = this.modalList.filter(modal => modal !== modalToRemove)
  }
}
