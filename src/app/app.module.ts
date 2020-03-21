import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { StartMapComponent } from './start-map/start-map.component';
import { GameHomeComponent } from './game-home/game-home.component';
import { GameNavbarComponent } from './game-navbar/game-navbar.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const appRoutes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'select', component: StartMapComponent },
  { path: 'game', component: GameHomeComponent },
  { path: '**', component: StartScreenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    StartMapComponent,
    GameHomeComponent,
    GameNavbarComponent,
    GameDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
