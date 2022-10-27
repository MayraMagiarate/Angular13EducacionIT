import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPersonalComponent } from './tarjeta-personal.component';

describe('TarjetaPersonalComponent', () => {
  let component: TarjetaPersonalComponent;
  let fixture: ComponentFixture<TarjetaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
