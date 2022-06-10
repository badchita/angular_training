import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { BecomAHeroPageComponent } from './pages/becom-ahero-page/becom-ahero-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'heroes', component: HeroesPageComponent },
  { path: 'become-a-hero', component: BecomAHeroPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
