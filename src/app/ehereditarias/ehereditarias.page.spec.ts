import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EHereditariasPage } from './ehereditarias.page';

describe('EHereditariasPage', () => {
  let component: EHereditariasPage;
  let fixture: ComponentFixture<EHereditariasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EHereditariasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EHereditariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
