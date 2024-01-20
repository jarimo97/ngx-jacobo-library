import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJacoboLib2Component } from './ngx-jacobo-lib2.component';

describe('NgxJacoboLib2Component', () => {
  let component: NgxJacoboLib2Component;
  let fixture: ComponentFixture<NgxJacoboLib2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxJacoboLib2Component]
    });
    fixture = TestBed.createComponent(NgxJacoboLib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
