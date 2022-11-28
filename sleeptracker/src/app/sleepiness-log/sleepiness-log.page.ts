import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { ToastController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-sleepiness-log',
  templateUrl: './sleepiness-log.page.html',
  styleUrls: ['./sleepiness-log.page.scss'],
})
export class SleepinessLogPage implements OnInit {
  logTime: String;
  rangeValues: Map<Number, String>;
  lastValue: Number;
  rangeValue: String;

  constructor(private sleepService:SleepService, public toastController: ToastController) {
    this.logTime = new Date().toISOString();

    this.rangeValues = new Map([
      [ 1, 'Feeling active, vital, alert, or wide awake' ],
      [ 2, 'Functioning at high levels, but not at peak; able to concentrate' ],
      [ 3, 'Awake, but relaxed; responsive but not fully alert' ],
      [ 4, 'Somewhat foggy, let down' ],
      [ 5, 'Foggy; losing interest in remaining awake; slowed down' ],
      [ 6, 'Sleepy, woozy, fighting sleep; prefer to lie down' ],
      [ 7, 'No longer fighting sleep, sleep onset soon; having dream-like thoughts' ],
    ]);

    this.lastValue = 1;
    this.rangeValue = this.rangeValues.get(this.lastValue);
  }

  ngOnInit() {
  }

  async presentToast() {
    var toast = await this.toastController.create({
      message: 'Your entry has been added!',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  onIonChange(ev: Event) {
    this.lastValue = Number((ev as RangeCustomEvent).detail.value);
    this.rangeValue = this.rangeValues.get(this.lastValue);
  }

  addDataEntry() {
    //console.log('Value: ' + this.lastValue.valueOf());
    //console.log('Date String: ' + this.logTime);
    let data = new StanfordSleepinessData(this.lastValue.valueOf(), new Date(this.logTime.valueOf()));

    this.sleepService.logStorageData(data.id, JSON.stringify(data));
    this.presentToast();
  }

}
