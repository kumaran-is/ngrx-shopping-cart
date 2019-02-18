import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { HomeComponent } from '@app/home/home.component';
import { SharedModule } from '@shared/shared.module';


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
