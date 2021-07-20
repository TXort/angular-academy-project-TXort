import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show.model';

@Component({
  selector: 'app-all-shows-container',
  templateUrl: './all-shows-container.component.html',
  styleUrls: ['./all-shows-container.component.css']
})
export class AllShowsContainerComponent implements OnInit {

  rawData: Array<any> = [

    {
      title: 'My first show',
      description: 'First show description',
      average_rating: 7,
      image_url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      title: 'My seconds show',
      description: 'Second show description',
      average_rating: 5,
      image_url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      title: 'My third show',
      description: 'Third show description',
      average_rating: 3,
      image_url: 'https://upload.wikimedia.org/wikipedia/en/5/55/GodfatherIII2.jpg',
    }
    ];
  
    shows: Array<Show> = [];
  
    ngOnInit() {
      this.shows = this.rawData.map((rawData) => { return new Show(rawData); });
  
    }

}
