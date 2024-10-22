import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   public getAirlines(): string[]{
    return [
      'Air Serbia', 'Fly Emirates', 'Lufthansa'
    ]
  }

  public getFlightClass(): string []{
    return ['First class', 'Business', 'Economy']
  } 


  public getTitle(): MovieModel[]{
       const title = [{ title: 'Truman Show',
                        genre: 'Comedy',
                        releaseDate: '1998-06-05',
                        image: './assets/blade.jpg'}]
           return title;
      }
  
   /*  movies: MovieModel [] = [{
        title : 'Truman show',
        genre: 'Comedy',
        releaseDate: '1998-06-5',
        image: '../assets/img/trumanshow.jpg'
        

    },
    {
      title : 'Truman show',
      genre: 'Comedy',
      releaseDate: '1998-06-5',
      image: '/assets/img/trumanshow.jpg'
      

  },
  {
    title : 'Truman show',
    genre: 'Comedy',
    releaseDate: '1998-06-5',
    image: '/assets/img/trumanshow.jpg'
    

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

},
{
  title : 'Truman show',
  genre: 'Comedy',
  releaseDate: '1998-06-5',
  image: '/assets/img/trumanshow.jpg'
  

}


  ] */

    
}
