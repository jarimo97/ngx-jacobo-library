import { NgModule } from '@angular/core';
import { NgxJacoboLib2Component } from './ngx-jacobo-lib2.component';
import { TestModuleComponent } from './test-module/test-module.component';



@NgModule({
  declarations: [
    NgxJacoboLib2Component,
    TestModuleComponent
  ],
  imports: [
  ],
  exports: [
    NgxJacoboLib2Component,
    TestModuleComponent
  ]
})
export class NgxJacoboLib2Module { }
export  {TestModuleComponent }
