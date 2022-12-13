import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAlert } from 'src/app/redux/actions/alert.action';
import { IAlert } from './alert.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
})
export class AlertComponent implements OnInit {
  alert?: IAlert;
  timer!: any;

  constructor(private store: Store<{ app: any }>) {
    store.select('app').subscribe((res) => {
      this.alert = res.alert;

      this.timer = setTimeout(() => {
        this.alert = { type: '', message: '' };

        // this.store.dispatch(
        //   setAlert({
        //     payload: {
        //       type: '',
        //       message: '',
        //     },
        //   })
        // );
      }, 5000);
    });
  }
  ngOnInit(): void {}
}
