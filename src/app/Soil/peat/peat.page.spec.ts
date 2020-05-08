import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeatPage } from './peat.page';

describe('PeatPage', () => {
  let component: PeatPage;
  let fixture: ComponentFixture<PeatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
