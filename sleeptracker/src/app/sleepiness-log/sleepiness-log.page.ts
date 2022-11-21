import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-sleepiness-log',
  templateUrl: './sleepiness-log.page.html',
  styleUrls: ['./sleepiness-log.page.scss'],
})
export class SleepinessLogPage implements OnInit {
  rangeValues: Map<Number, String>;
  rangeValue: String;

  constructor() {
    this.rangeValues = new Map([
      [ 1, 'Feeling active, vital, alert, or wide awake' ],
      [ 2, 'Functioning at high levels, but not at peak; able to concentrate' ],
      [ 3, 'Awake, but relaxed; responsive but not fully alert' ],
      [ 4, 'Somewhat foggy, let down' ],
      [ 5, 'Foggy; losing interest in remaining awake; slowed down' ],
      [ 6, 'Sleepy, woozy, fighting sleep; prefer to lie down' ],
      [ 7, 'No longer fighting sleep, sleep onset soon; having dream-like thoughts' ],
    ]);
  }

  ngOnInit() {
  }

  onIonChange(ev: Event) {
    let lastValue = Number((ev as RangeCustomEvent).detail.value);
    this.rangeValue = this.rangeValues.get(lastValue);
  }

}
