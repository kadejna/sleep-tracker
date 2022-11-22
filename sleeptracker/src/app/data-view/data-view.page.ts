import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.page.html',
  styleUrls: ['./data-view.page.scss'],
})
export class DataViewPage implements OnInit {
  sleepData:SleepData[];
	overnightData:OvernightSleepData[];
	sleepinessData:StanfordSleepinessData[];

  constructor(private sleepService: SleepService) {
    this.sleepData = this.sleepService.getSleepData();
    this.overnightData = this.sleepService.getOvernightData();
    this.sleepinessData = this.sleepService.getSleepinessData();
  }

  ngOnInit() {
  }

}
