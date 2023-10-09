import { Component, OnInit } from '@angular/core';
import { V2ApiService } from 'src/app/services/api-v2.service';

@Component({
  selector: 'v2-app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class V2FooterComponent implements OnInit {
  footer!: { title: string; href: string }[];

  constructor(private api: V2ApiService) {}

  ngOnInit(): void {
    this.api.getAllPublished('v1').subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
