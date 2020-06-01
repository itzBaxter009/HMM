import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlergiasPage } from './alergias.page';

describe('AlergiasPage', () => {
  let component: AlergiasPage;
  let fixture: ComponentFixture<AlergiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlergiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
