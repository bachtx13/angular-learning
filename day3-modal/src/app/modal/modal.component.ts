import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ModalService} from "../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: true
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() key: string = '';
  isOpen = false;
  private element: HTMLElement;

  constructor(private modalService:ModalService, private elementRef:ElementRef, private renderer2: Renderer2) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.modalService.add(this)
    this.renderer2.appendChild('body', this.element);
  }
  open(){
    console.log('open')
  }
  close(){
    console.log('close')
  }

  ngOnDestroy(): void {
    this.modalService.remove(this)
  }
}
