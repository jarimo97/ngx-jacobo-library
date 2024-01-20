import { TestBed } from '@angular/core/testing';

import { NgxJacoboLib1Service } from './ngx-jacobo-lib1.service';

describe('NgxJacoboLib1Service', () => {
  let service: NgxJacoboLib1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJacoboLib1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
