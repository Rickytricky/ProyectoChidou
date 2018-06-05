import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  pageList: AngularFireList<any>;
  selectedPage: Page = new Page();

  constructor( private firebase: AngularFireDatabase) { }
    
  
  getPages() {
    return this.pageList = this.firebase.list('pages');
  }

  insertPage(page:Page){
    this.pageList.push({
      title: page.title,
      subtitle: page.subtitle,
      postedby : page.postedby,
      date: page.date
    })
  }

  updatePage(page: Page){
    this.pageList.update(page.skey, {
      title: page.title,
      subtitle: page.subtitle,
      postedby: page.postedby,
      date: page.date
    })
  }

  deletePage($key: string){
    this.pageList.remove($key)
  }


}
