import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HenfermedadesPage } from './henfermedades.page';

describe('HenfermedadesPage', () => {
  let component: HenfermedadesPage;
  let fixture: ComponentFixture<HenfermedadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenfermedadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HenfermedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
