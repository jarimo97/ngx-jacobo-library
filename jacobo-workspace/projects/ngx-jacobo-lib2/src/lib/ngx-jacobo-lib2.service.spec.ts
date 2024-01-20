import { TestBed } from '@angular/core/testing';

import { NgxJacoboLib2Service } from './ngx-jacobo-lib2.service';

describe('NgxJacoboLib2Service', () => {
  let service: NgxJacoboLib2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxJacoboLib2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
