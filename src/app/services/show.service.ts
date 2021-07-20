import { Injectable } from '@angular/core';
import { IRawShow } from '../interfaces/rawShow.interface';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  rawData: Array<IRawShow> = [

    {
      title: 'My first show',
      description: 'First show description',
      average_rating: 7,
      image_url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      id: '1'
    },
    {
      title: 'My seconds show',
      description: 'Second show description',
      average_rating: 5,
      image_url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      id: '2'
    },
    {
      title: 'My third show',
      description: 'Third show description',
      average_rating: 3,
      image_url: 'https://upload.wikimedia.org/wikipedia/en/5/55/GodfatherIII2.jpg',
      id: '3'
    }
    ];

    public getShows(): Array<Show> {
      return this.rawData.map((rawShowData: IRawShow) => {
        return new Show(rawShowData);
      });
    }

    public getTopRated(): Array<Show> {
      return this.getShows().filter((show: Show) => show.averageRating > 4);
    }

    public getShow(id: string): Show | undefined {
      return this.getShows().find( (show: Show) => show.id === id);
    }

  }

