import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Hero } from 'src/app/interface/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService : HeroService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Home')
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((response) => {
      this.heroes = response.slice(0,3);
    });
  }

  getImage(name: string) {
    return `../../../assets/images/${name}`
  }
}
