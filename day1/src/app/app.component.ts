import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ObservableExAComponent} from "./observable-ex-a/observable-ex-a.component";
import {ObservableExBComponent} from "./observable-ex-b/observable-ex-b.component";
import {ObservableExService} from "./service/observable-ex.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ObservableExAComponent, ObservableExBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ObservableExService]
})
export class AppComponent {
  title = 'day1';
}
