import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab1Root: string;
tab2Root: string;
tab3Root: string;
tab4Root: string;
tab5Root: string;
  constructor() {
    this.tab1Root = 'Home2Page';
    this.tab2Root = 'ProfileViewPage';
    this.tab3Root = 'HomePage';
    this.tab4Root = 'CommunityPage';
    this.tab5Root = "TodoPage";
  }


}
