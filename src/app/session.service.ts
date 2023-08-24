import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private inputData: string = '';

  setInputData(data: string): void {
    console.log('setting data', data);
    this.inputData = data;
  }

  getInputData(): string {
    console.log('getting data', this.inputData);

    return this.inputData;
  }
  constructor() {}

  // setItem(key: string, value: string): void {
  //   localStorage.setItem(key, value);
  // }

  // getItem(key: string): string | null {
  //   return localStorage.getItem(key);
  // }

  // clear(): void {
  //   localStorage.clear();
  // }
}
