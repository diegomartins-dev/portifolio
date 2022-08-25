import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class SobreComponent implements OnInit {
  public technologies: Technology[];

  constructor() {
    this.technologies = [
      {
        title: 'HTML5',
        percent: '100%',
      },
      {
        title: 'CSS3',
        percent: '100%',
      },
      {
        title: 'JavaScript',
        percent: '100%',
      },
      {
        title: 'Angular',
        percent: '100%',
      },
      {
        title: 'Ionic',
        percent: '100%',
      },
      {
        title: 'Firebase',
        percent: '85%',
      },
      {
        title: 'NodeJs',
        percent: '85%',
      },
      {
        title: 'ReactJs',
        percent: '100%',
      },
      {
        title: 'PHP',
        percent: '100%',
      },
      {
        title: 'SQL',
        percent: '100%',
      },
      {
        title: 'GIT',
        percent: '100%',
      },
      {
        title: 'SASS',
        percent: '100%',
      },
      {
        title: 'Gulp',
        percent: '70%',
      },
    ];
  }

  ngOnInit(): void {}
}

interface Technology {
  title: string;
  percent: string;
}
