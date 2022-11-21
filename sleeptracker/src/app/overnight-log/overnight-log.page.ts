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
  sleepStart:string = new Date().toISOString();
  sleepEnd:string = new Date().toISOString(); 


  constructor(private sleepService:SleepService, public toastController:ToastController) { }

  ngOnInit() {
  }

  addDataEntry() { 
    let data = new OvernightSleepData(new Date(this.sleepStart.valueOf()), new Date(this.sleepEnd.valueOf()));
  }

}
