import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class HomeModule { }
