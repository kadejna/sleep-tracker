import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string){
    return this._storage.get(key);
  }

  public showAll() { // console logs everything currently stored
    this._storage?.forEach((value, key) => {
      // id
      console.log(key);
      // id, loggedAt, sleepStart, sleepEnd
      // id, loggedAt, loggedValue
      console.log(value);
    });
  }

  public displayArray() { 
    let arr = []; 
    let promise = this._storage?.forEach((value, key) => { 
      arr.push(value); 
    }).then(() => {
      return arr;
    });
    return Promise.resolve(promise);
  }

  async clear() { 
    await this._storage.clear()
  }
}