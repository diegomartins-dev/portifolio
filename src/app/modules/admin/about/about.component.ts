import { Component, OnInit } from '@angular/core';
import { about } from 'src/app/components/about/about.mock';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  json: any;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((result: any) => {
      this.json = result.data;
    });
  }

  onSave(json: {}) {
    console.log(json);
  }
}
