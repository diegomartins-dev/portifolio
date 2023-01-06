import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPageViewComponent } from './json-page-view.component';

describe('JsonPageViewComponent', () => {
  let component: JsonPageViewComponent;
  let fixture: ComponentFixture<JsonPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPageViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
