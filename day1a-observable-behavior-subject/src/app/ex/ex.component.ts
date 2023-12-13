import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrl: './ex.component.css'
})
export class ExComponent {
constructor(private router: Router) {
}
  redirect(){
    this.router.navigate(['ex2']);
  }
}
