import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoilPage } from './soil.page';

describe('SoilPage', () => {
  let component: SoilPage;
  let fixture: ComponentFixture<SoilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
