import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomAHeroPageComponent } from './becom-ahero-page.component';

describe('BecomAHeroPageComponent', () => {
  let component: BecomAHeroPageComponent;
  let fixture: ComponentFixture<BecomAHeroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomAHeroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomAHeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
