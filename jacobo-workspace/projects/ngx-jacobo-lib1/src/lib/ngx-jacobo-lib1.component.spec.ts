import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJacoboLib1Component } from './ngx-jacobo-lib1.component';

describe('NgxJacoboLib1Component', () => {
  let component: NgxJacoboLib1Component;
  let fixture: ComponentFixture<NgxJacoboLib1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxJacoboLib1Component]
    });
    fixture = TestBed.createComponent(NgxJacoboLib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
