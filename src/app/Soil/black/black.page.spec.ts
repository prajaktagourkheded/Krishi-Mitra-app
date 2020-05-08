import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlackPage } from './black.page';

describe('BlackPage', () => {
  let component: BlackPage;
  let fixture: ComponentFixture<BlackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
