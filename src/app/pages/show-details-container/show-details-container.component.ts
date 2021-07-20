import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.css']
})
export class ShowDetailsContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private showService: ShowService) { }

  public show: Show | undefined;

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.show = this.showService.getShow(id);
    }
  }

}
