import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../common/train';


@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private baseUrl='http://localhost:8093/api/train';

  constructor(private httpClient:HttpClient) { }

  getTrainList():Observable<Train[]>{
    return this.httpClient.get<Train[]>('http://localhost:8093/api/train/all');
    
  }



}

