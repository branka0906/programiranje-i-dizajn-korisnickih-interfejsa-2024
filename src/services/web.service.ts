import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagemodel } from '../models/page.model';
import { FlightModel } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private client : HttpClient
  private baseUrl : string

  constructor() { 
    this.client = inject (HttpClient)
    this.baseUrl = 'https://flight.pequla.com/api'
  }
  public getRecomendedFlights(){
    const url = `${this.baseUrl}/flight?page=0&size=10&type=departure&sort=scheduledAt,desc`
    return this.client.get<Pagemodel<FlightModel>>(url, {
          headers: {
            'Accept' : 'application/json'
          }
    })
  }

  public getAvailableDestinations(){
    const url = `${this.baseUrl}/flight/destination?type=departure`
    return this.client.get<string[]>(url, {
        headers: {
          'Accept': 'application/json'
        }
    })
  }

}
