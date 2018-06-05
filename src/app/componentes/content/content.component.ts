import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../services/pages.service'
import { Page } from '../../models/page';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: []
})
export class ContentComponent implements OnInit {

  pageList: Page[];

  constructor(private pageService: PagesService) { }

  ngOnInit() {
    this.pageService.getPages()
    .snapshotChanges()
    .subscribe(item => {
        this.pageList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.pageList.push(x as Page)
        });
    });
  }



}
