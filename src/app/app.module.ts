import {Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {LocationStrategy,HashLocationStrategy,APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import {SearchComponent} from './components/SearchComponent';
import {ArtistComponent} from './components/ArtistComponent';
import {TrackComponent} from './components/TrackComponent';
import {AlbumComponent} from './components/AlbumComponent';

import {SPOTIFY_PROVIDERS} from './services/SpotifyService';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [ AppComponent ],
  providers: [
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule { }

