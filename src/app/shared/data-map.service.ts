import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataMapService {
  public nameList: string[] = ['Raj', 'Manish', 'Joy', 'Ramesh'];
  constructor() { }
}
