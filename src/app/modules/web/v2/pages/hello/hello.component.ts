import { Component, OnInit } from '@angular/core';
import { V2HelloService } from '../../services/hello.service';

@Component({
  selector: 'v2-app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class V2HelloComponent implements OnInit {
  constructor(private helloService: V2HelloService) {}

  ngOnInit(): void {
    this.helloService.getAllPublished('v1').subscribe({
      next: (res) => {
        console.log(res);
      },
    });

    this.helloService
      .get('v1', '0kVg8NQ72QcW8Qe5cafx')
      .subscribe({ next: (res) => console.log(res) });
  }
}
