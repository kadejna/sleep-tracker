import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})

export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
			SleepService.LoadDefaultData = false;
		}
		this.addStorageData(); 
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.unshift(sleepData);
		SleepService.AllOvernightData.unshift(sleepData);
	}


	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.unshift(sleepData);
		SleepService.AllSleepinessData.unshift(sleepData);
	}

	public async logStorageData(key, value) {
		Storage.set({key:key, value: value}).then();
	}

	private async addStorageData(){
		Storage.keys().then((data) => {
			data.keys.forEach(k => {
			  	Storage.get({key: k}).then((result) =>{
					let parsed = JSON.parse(result.value);
					if (parsed.sleepStart) {
						let overnight = new OvernightSleepData(new Date(parsed.sleepStart), new Date(parsed.sleepEnd));
						SleepService.AllOvernightData.push(overnight);
						SleepService.AllSleepData.push(overnight);
					} 
					else {
						let sleepiness = new StanfordSleepinessData(parsed.loggedValue, new Date(parsed.loggedAt));
						SleepService.AllSleepinessData.push(sleepiness);
						SleepService.AllSleepData.push(sleepiness);
					}
			  	})
			});
		});
		SleepService.AllOvernightData.sort(function (first, second) { 
			if (first.getSleepStart() < second.getSleepStart()) {
				return 1; 
			}
			else if (first.getSleepStart() > second.getSleepStart()) { 
				return -1; 
			}
			return 0; 
		});
		SleepService.AllSleepinessData.sort(function (first, second) { 
			if (first.loggedAt < second.loggedAt) {
				return 1; 
			}
			else if (first.loggedAt > second.loggedAt) { 
				return -1; 
			}
			return 0; 
		});
	}

	public clearData() { 
		Storage.clear();
	}

	/*
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
	*/

	/*
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

	public clearData() { 
		this.overnightStorage.clear(); 
		this.sleepinessStorage.clear();
	}
	*/
}
