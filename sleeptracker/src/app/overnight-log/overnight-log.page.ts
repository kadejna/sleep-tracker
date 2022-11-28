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

  async presentToast() { 
    var toast = await this.toastController.create({
      message: 'Your entry has been added!', 
      duration: 2000, 
      position: 'top'
    });
    toast.present();
  }

  addDataEntry() { 
    let data = new OvernightSleepData(new Date(this.sleepStart.valueOf()), new Date(this.sleepEnd.valueOf()));
    this.sleepService.logStorageData(data.id, JSON.stringify(data));
    this.presentToast();
  }
}
