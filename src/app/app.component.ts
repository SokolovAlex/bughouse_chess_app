import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Auth, User } from '@ionic/cloud-angular';

import { MenuPage } from '../pages/menu/menu';
import { GamePage } from '../pages/game/game';
import { RoomsPage } from '../pages/rooms/rooms';
import { LoginPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MenuPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
      public splashScreen: SplashScreen
      // public user: User,
      // public auth: Auth,
    ) {
    this.initializeApp();

    this.pages = [
      { title: 'Menu', component: MenuPage },
      { title: 'Game', component: GamePage },
      { title: 'Search Room', component: RoomsPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
