import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamenesPage } from './examenes.page';

describe('ExamenesPage', () => {
  let component: ExamenesPage;
  let fixture: ComponentFixture<ExamenesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
