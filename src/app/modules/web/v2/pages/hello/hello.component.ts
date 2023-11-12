import { Component, OnInit } from '@angular/core';
import { V2HelloService } from '../../services/hello.service';

@Component({
  selector: 'v2-app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class V2HelloComponent implements OnInit {
  hello?: any;

  constructor(private helloService: V2HelloService) {}

  ngOnInit(): void {
    this.helloService.getAllPublished('v1').subscribe({
      next: (res) => {
        this.hello = res.data[0];
      },
    });
  }
}
