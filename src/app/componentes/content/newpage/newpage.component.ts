import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../../services/pages.service'
import { NgForm } from '@angular/forms';
import { Page } from '../../../models/page';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styles: []
})
export class NewpageComponent implements OnInit {

  constructor(private pageService: PagesService) { }

  ngOnInit() {
    this.pageService.getPages();
    this.resetForm();
  }

  onSubmit(pageForm? : NgForm) {
    this.pageService.insertPage(pageForm.value);
    this.resetForm(pageForm);
  }

  resetForm(pageForm?: NgForm){
    if(pageForm != null) {
      pageForm.reset();
      this.pageService.selectedPage = new Page();
    }
  }


}
