import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClayPage } from './clay.page';

describe('ClayPage', () => {
  let component: ClayPage;
  let fixture: ComponentFixture<ClayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
