import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddConsultaPage } from './add-consulta.page';

describe('AddConsultaPage', () => {
  let component: AddConsultaPage;
  let fixture: ComponentFixture<AddConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
