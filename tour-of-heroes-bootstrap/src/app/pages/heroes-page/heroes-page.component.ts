import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from 'src/app/interface/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.css']
})
export class HeroesPageComponent implements OnInit {
  heroes      : Hero[] = [];
  hero_details: Hero | any;

  public closeResult: string = '';

  constructor(
    private heroService : HeroService,
    private modalService: NgbModal,
    private titleService: Title
  ) {
    this.titleService.setTitle('Heroes')
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((response) => {
      console.log(response);

      this.heroes = response;
    });
  }

  getHero(id: Number) {
    const heroId = Number(id);
    this.heroService.getHero(heroId).subscribe(hero => this.hero_details = hero);
  }

  getImage(name: string) {
    return `../../../assets/images/${name}`
  }

  openModal(content: any, id: Number) {
    this.modalService.open(content, {centered: true, size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.getHero(id);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
