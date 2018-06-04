import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuriedoneShopPage } from './buriedone-shop';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    BuriedoneShopPage,
  ],
  providers: [
    InAppBrowser,
  ],
  imports: [
    IonicPageModule.forChild(BuriedoneShopPage),
    InAppBrowser
  ],
})
export class BuriedoneShopPageModule {}
