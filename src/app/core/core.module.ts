import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule i.e the AppModule
  and makes all the services(providers) under CoreMode as application-wide
  singleton service */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
