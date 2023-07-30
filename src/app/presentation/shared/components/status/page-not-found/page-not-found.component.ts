import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
    
      this.renderer.addClass(this.document.body, 'not-found-body');
    
  }
  removeClass(){
    this.renderer.removeClass(this.document.body, 'not-found-body');
  }

}
