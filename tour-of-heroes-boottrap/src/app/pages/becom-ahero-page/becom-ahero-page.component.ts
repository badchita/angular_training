import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-becom-ahero-page',
  templateUrl: './becom-ahero-page.component.html',
  styleUrls: ['./becom-ahero-page.component.css']
})
export class BecomAHeroPageComponent implements OnInit {
  heroForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.validateForm()
  }

  validateForm() {
    this.heroForm = this.formBuilder.group({
      heroName   : [null, [Validators.required]],
      fullName   : [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

}
