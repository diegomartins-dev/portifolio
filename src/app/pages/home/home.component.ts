import { MockService } from './../../services/mock.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  private mode = ['mock', 'prod'];
  private modeActive = 'mock';

  public data: any = [];
  private storage: any = [];

  constructor(private api: ApiService, private mock: MockService) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (this.modeActive === this.mode[0]) {
      this.getDataMocks();
    } else if (this.modeActive === this.mode[1]) {
    }
  }

  getDataMocks() {
    const datas = this.mock.getAll();

    datas.pages.map((data: any) => {
      if (data.page === 'home') {
        this.getComponents(data.components);
      }
    });
  }

  getComponents(components: any) {
    components.map((items: any) => {
      if (items.components !== undefined) {
        return this.getComponents(items.components);
      }
      this.storage.push(items);
      return;
    });
    this.data = this.storage;
  }

  getDataApi() {
    const datas = this.api.getAll();
  }
}
