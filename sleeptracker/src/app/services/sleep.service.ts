import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData = [];
	public static AllSleepinessData = [];

	constructor(private overnightStorage:StorageService, private sleepinessStorage:StorageService) {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
			SleepService.LoadDefaultData = false;
		}
	}

	public printOvernightArray() { 
		console.log("PRINTING OUT OVERNIGHT ARRAY: ")
		SleepService.AllOvernightData.forEach((key, value) => {
			console.log(key, value);
		});
	}

	public printSleepinessArray() { 
		console.log("PRINTING OUT SLEEPINESS ARRAY: ")
		SleepService.AllSleepinessData.forEach((key, value) => {
			console.log(key, value);
		});
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
		this.overnightStorage.set(sleepData.id, sleepData);
		//this.overnightStorage.showAll();
		this.overnightStorage.displayArray().then(data => {
			console.log(data);
		}); 
	}


	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
		this.sleepinessStorage.set(sleepData.id, sleepData);
		//this.sleepinessStorage.showAll();
		this.sleepinessStorage.displayArray().then(data => { 
			console.log(data);
		}); 
	}

	public async displayArray() { 
		let promise = this.overnightStorage.displayArray().then(data => {
			return data;
		}); 
		return Promise.resolve(promise);
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

	public retrieveAllOvernightData() { 
		console.log("retrieveAllOvernightData(): ");
		SleepService.AllOvernightData.forEach( (value) => {
			this.overnightStorage.get(value.id).then( (data) => {
				console.log(data);
			});
		});
	}

	public retrieveAllSleepinessData() { 
		console.log("retrieveAllSleepinessData(): ");
		SleepService.AllSleepinessData.forEach( (value) => {
			this.sleepinessStorage.get(value.id).then( (data) => {
				console.log(data);
			});
		});
	}

	public clearData() { 
		this.overnightStorage.clear(); 
		this.sleepinessStorage.clear();
	}
}
