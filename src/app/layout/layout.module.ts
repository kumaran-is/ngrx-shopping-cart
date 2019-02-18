import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from '@layout/app-shell/app-shell.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { PageNotFoundComponent } from '@layout/page-not-found/page-not-found.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    AppShellComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    AppShellComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ]
})
export class LayoutModule { }
