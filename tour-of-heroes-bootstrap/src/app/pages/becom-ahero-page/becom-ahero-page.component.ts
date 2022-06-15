import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/interface/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-becom-ahero-page',
  templateUrl: './becom-ahero-page.component.html',
  styleUrls: ['./becom-ahero-page.component.css']
})
export class BecomAHeroPageComponent implements OnInit {
  heroForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.validateForm()
  }

  onclickBecomeAHero():void {
    if (this.heroForm.valid) {
      this.heroService.addHero(this.heroForm.value as Hero);
      this.getHeroes();
    } else {
      Object.values(this.heroForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((response) => {
      console.log(response);
    });
  }

  validateForm() {
    this.heroForm = this.formBuilder.group({
      name       : [null, [Validators.required]],
      full_name  : [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

}
