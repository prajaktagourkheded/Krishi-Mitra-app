import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlitPage } from './slit.page';

describe('SlitPage', () => {
  let component: SlitPage;
  let fixture: ComponentFixture<SlitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
