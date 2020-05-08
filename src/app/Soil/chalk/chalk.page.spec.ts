import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChalkPage } from './chalk.page';

describe('ChalkPage', () => {
  let component: ChalkPage;
  let fixture: ComponentFixture<ChalkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
