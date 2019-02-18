import { Component, HostListener, OnInit } from '@angular/core';
import { DocumentService } from '@core/util/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private documentService: DocumentService
  ) {}

  public ngOnInit() {
    this.documentService.setGoToTopButtonPosition('goTop');
  }

  public goToTop() {
    this.documentService.scrollUp();
  }

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    this.documentService.setGoToTopButtonPosition('goTop');
  }

}
