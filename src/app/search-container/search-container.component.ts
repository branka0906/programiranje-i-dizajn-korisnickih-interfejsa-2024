import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@Component({
  selector: 'app-search-container',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatSelectModule, RouterLink, MatButtonModule, NgIf, NgFor, HttpClientModule],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent {

  @Input() destinations: string[] | undefined
  @Input() airlines: string [] | undefined
  @Input() flightClass: string [] | undefined
  @Input() defaultDestination: string | null = null
  @Input() defaultAirline: string | null = null
  @Input() defaultFlightClass: string | null = null
  @Input() defaultReturn: string | boolean | null = null

}