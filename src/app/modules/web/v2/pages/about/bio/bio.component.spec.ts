/* tslint:disable:no-unused-variable */
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { BioComponent } from './bio.component';
import { V2PagesService } from '../../../services/pages.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { EventEmitter, ChangeDetectorRef } from '@angular/core';

fdescribe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let pagesServiceSpy: jasmine.SpyObj<V2PagesService>;
  let router: Router;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl', 'url']);
    pagesServiceSpy = jasmine.createSpyObj('V2PagesService', [
      'setCurrentUrl',
      'getCurrentUrl',
    ]);

    TestBed.configureTestingModule({
      declarations: [BioComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: V2PagesService, useValue: pagesServiceSpy }],
    });

    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set current URL on initialization', () => {
    // spyOn(router, 'navigateByUrl');
    component.ngOnInit();
    expect(pagesServiceSpy.setCurrentUrl).toHaveBeenCalledWith('/');
  });

  it('should build indexes in each line on window resize', () => {
    spyOn(component, 'buildIndexesInEachLines');
    window.dispatchEvent(new Event('resize'));
    expect(component.buildIndexesInEachLines).toHaveBeenCalled();
  });

  it('should calculate the quantity of lines correctly', () => {
    const windowElementSize = 300;
    const paragraphArray = ['line 1', 'line 2', 'line 3'];
    const result = component.buildIndexesInEachLine(
      windowElementSize,
      paragraphArray
    );
    expect(result).toBe(3);
  });

  it('should build indexes for each line correctly', () => {
    const textParagraph = document.createElement('div');
    textParagraph.innerHTML = 'line 1<br>line 2<br>line 3';
    const spyOnBuildIndexesInEachLine = spyOn(
      component,
      'buildIndexesInEachLine'
    ).and.returnValue(3);

    component.buildIndexesInEachLines(textParagraph);

    expect(spyOnBuildIndexesInEachLine).toHaveBeenCalled();
    expect(component.indexes).toEqual([1, 2, 3]);
  });

  // it('should set current URL', () => {
  //   const url = '/test-url';

  //   spyOn(router, 'navigateByUrl');
  //   router.navigateByUrl(url);

  //   component.ngOnInit();

  //   expect(router.navigateByUrl).toHaveBeenCalledWith(url);
  // });

  it('should set current URL ngOnInit', fakeAsync(async () => {
    const url = '/test-url';

    routerSpy.navigateByUrl(url);

    component.ngOnInit();

    // expect(routerSpy.navigateByUrl).toHaveBeenCalledWith(url);

    await pagesServiceSpy.setCurrentUrl(url);
    flush();

    const emitter = new EventEmitter<string>();
    emitter.emit(url);
    await pagesServiceSpy.getCurrentUrl.and.returnValue(emitter);

    fixture.detectChanges();
    flush();

    let actualUrl = '';
    await (component as any).pagesService
      .getCurrentUrl()
      .subscribe((value: string) => {
        console.log(value);
        actualUrl = value;
      });
    fixture.detectChanges();
    flush();

    await expect(actualUrl).toBe(url);
  }));
});
