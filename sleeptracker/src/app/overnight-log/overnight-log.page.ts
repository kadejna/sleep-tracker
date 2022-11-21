import { OvernightSleepData } from './../data/overnight-sleep-data';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-overnight-log',
  templateUrl: './overnight-log.page.html',
  styleUrls: ['./overnight-log.page.scss'],
})
export class OvernightLogPage implements OnInit {

  constructor(private sleepService:SleepService, public toastController:ToastController) { }

  ngOnInit() {
  }

}
