import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEquivalenciasComponent } from './carousel-equivalencias.component';

describe('CarouselEquivalenciasComponent', () => {
  let component: CarouselEquivalenciasComponent;
  let fixture: ComponentFixture<CarouselEquivalenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselEquivalenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselEquivalenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
