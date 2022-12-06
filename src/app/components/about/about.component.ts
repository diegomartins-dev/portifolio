import { AboutService } from './about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class SobreComponent implements OnInit {
  public technologies!: Technology[];

  constructor(private aboutService: AboutService) {
    // this.technologies
  }

  ngOnInit(): void {
    this.aboutService.getItemsAbout().subscribe((result) => {
      console.log(result);
    });
  }
}

interface Technology {
  title: string;
  percent: string;
}
