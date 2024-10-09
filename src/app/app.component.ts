import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'App 2024';
  public counter: number = 10;

  public incrementar(value: number): void {
    if (this.counter + value >= 0) {
      this.counter += value;
    } else {
      this.counter = 0;
    }
  }
  public reset(): void {
    this.counter = 10;
  }
}
