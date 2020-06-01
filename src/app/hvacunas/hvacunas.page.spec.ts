import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HVacunasPage } from './hvacunas.page';

describe('HVacunasPage', () => {
  let component: HVacunasPage;
  let fixture: ComponentFixture<HVacunasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HVacunasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HVacunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
