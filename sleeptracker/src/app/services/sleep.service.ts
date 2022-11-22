import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
<<<<<<< Updated upstream
import { Firebase } from '@awesome-cordova-plugins/firebase/ngx';
=======
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
  })
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

<<<<<<< Updated upstream
	constructor(private firebase: Firebase) {
=======
	constructor(private storage:Storage) {
>>>>>>> Stashed changes
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
			SleepService.LoadDefaultData = false;
		//this.loadDataFromStorage();
		}
	}

	async ngOnInit() {
		// If using a custom driver:
		// await this.storage.defineDriver(MyCustomDriver)
		await this.storage.create();
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		//Storage.set(SleepService.AllSleepData.length, sleepData.startEndString());
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		//Storage.set(key, value);
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
	}

	public getSleepData(): SleepData[] {
		return SleepService.AllSleepData;
	}

	public getOvernightData(): OvernightSleepData[] {
		return SleepService.AllOvernightData;
	}

	public getSleepinessData(): StanfordSleepinessData[] {
		return SleepService.AllSleepinessData;
	}

	/*
	private loadDataFromStorage() { 
		this.storage.forEach( (key, value, index) => {
			start = value.split(",", [0]);
			end = value.split(",")[1]; 
			if (isSleepiness) { 
				SleepService.AllSleepinessData.push(value);
			}
			else { 
				SleepService.AllOvernightData.push(value);
			}
			SleepService.AllSleepData.push(value);
		});
	}
	*/
}
