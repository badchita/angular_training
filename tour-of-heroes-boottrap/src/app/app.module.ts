import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './component/main-header/main-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainFooterComponent } from './component/main-footer/main-footer.component';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { BecomAHeroPageComponent } from './pages/becom-ahero-page/becom-ahero-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HomePageComponent,
    MainFooterComponent,
    HeroesPageComponent,
    BecomAHeroPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
