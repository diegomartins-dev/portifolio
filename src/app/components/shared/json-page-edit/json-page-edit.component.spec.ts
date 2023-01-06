import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPageEditComponent } from './json-page-edit.component';

describe('JsonPageEditComponent', () => {
  let component: JsonPageEditComponent;
  let fixture: ComponentFixture<JsonPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
