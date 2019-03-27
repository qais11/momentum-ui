import { Component } from '@angular/core';
import { SliderChange } from '@collab-ui/angular/slider';

@Component({
  selector: 'example-slider-two-handles',
  template: `
    <div>
      {{ label }}
    </div>
    <cui-slider
      [(ngModel)]="value"
      max="500"
      tick="100"
      (change)="change($event)"
    ></cui-slider>
  `,
})
export class ExampleSliderTwoHandlesComponent {
  value: SliderChange = { high: 300, low: 100 };
  get label(): string {
    return `Low: ${this.value.low} High: ${this.value.high}`;
  }

  change(event: SliderChange) {
    console.info(event);
  }
}