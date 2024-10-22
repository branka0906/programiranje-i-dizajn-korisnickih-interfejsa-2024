import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FlightModel } from '../../models/flight.model';
import { WebService } from '../../services/web.service';
import { DataService } from '../../services/data.service';
import { SearchContainerComponent } from '../search-container/search-container.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MovieModel } from '../../models/movie.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[MatCardModule, MatButtonModule,HttpClientModule, NgIf, NgFor, RouterLink, MatListModule
    , MatInputModule, MatSelectModule, SearchContainerComponent, MatTabsModule,
  ],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private webService: WebService
  public recommended: FlightModel [] = []
  public dataService: DataService
  public  destinations: string[] = []
  public  airlines: string[] =[]
  public flightClass: string [] = []
  public movie: MovieModel [] = []
  public title: string[] = []



  
  constructor (){
        this.webService = new WebService()
        this.dataService = new DataService()
  }
      ngOnInit(): void {
        const url = 'https://flight.pequla.com/api/flight?page=0&size=3&type=departure&sort=scheduledAt,desc'
        this.webService.getRecomendedFlights().subscribe(rsp => this.recommended = rsp.content)
        this.webService.getAvailableDestinations().subscribe(rsp => this.destinations = rsp)
        this.airlines = this.dataService.getAirlines()
        this.flightClass = this.dataService.getFlightClass()
        this.movie = this.dataService.getTitle()
        
        console.log(this.movie)
        console.log(this.airlines)

      
       
       
      }
      public generateImageUrl(dest: string){
        return `https://img.pequla.com/destination/${dest.split(' ')[0].toLowerCase()}.jpg`
      }

      public generateImage(img: string): string{
        return `./src/assets/img${img}`
      }

      public formatDate(iso: string){
        return new Date(iso).toLocaleString('sr-RS')
      }
}
