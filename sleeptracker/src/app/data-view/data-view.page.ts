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
  AllSleepData:SleepData[];
	AllOvernightData:OvernightSleepData[];
	AllSleepinessData:StanfordSleepinessData[];

  constructor(private sleepService: SleepService) { }

  ngOnInit() {
    this.AllSleepData = this.sleepService.getSleepData();
    this.AllOvernightData = this.sleepService.getOvernightData();
    this.AllSleepinessData = this.sleepService.getSleepinessData();
  }

}
