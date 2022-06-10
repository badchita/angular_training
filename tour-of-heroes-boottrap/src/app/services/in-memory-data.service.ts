import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interface/hero';

@Injectable({ providedIn: 'root',})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [{
        id       : 12,
        name     : 'Dr. Nice',
        image    : 'hero1.jpg',
        full_name: 'Deadpool'
      },
      {
        id       : 13,
        name     : 'Bombasto',
        image    : 'hero2.jpg',
        full_name: 'Doctor Strange'
      },
      {
        id       : 14,
        name     : 'Celeritas',
        image    : 'hero3.jpg',
        full_name: 'Captain Avenger'
      },
      {
        id       : 15,
        name     : 'Magneta',
        image    : 'hero4.jpg',
        full_name: 'Thor'
      },
      {
        id       : 16,
        name     : 'RubberMan',
        image    : 'hero5.jpg',
        full_name: 'Captain Marvel'
      },
      {
        id       : 17,
        name     : 'Dynama',
        image    : 'hero6.jpg',
        full_name: 'Flash'
      },
      {
        id       : 18,
        name     : 'Dr. IQ',
        image    : 'hero7.jpg',
        full_name: 'Robin'
      },
      {
        id       : 19,
        name     : 'Magma',
        image    : 'hero8.jpg',
        full_name: 'Arrow Guy'
      },
      {
        id   : 20,
        name : 'Tornado',
        image: 'hero9.jpg',
        full_name: 'Ms Tornado'
      }
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
