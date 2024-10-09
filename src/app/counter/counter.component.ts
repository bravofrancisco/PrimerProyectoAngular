import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  styleUrl: './app.component.css',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="incrementar(1)">+1</button>
    <button type="reset" (click)="reset()">Reset</button>
    <button (click)="incrementar(-1)">-1</button>
    <hr />
  `,
})
export class CounterComponent {
  
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
