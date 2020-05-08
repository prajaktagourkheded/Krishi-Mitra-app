import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SandyPage } from './sandy.page';

describe('SandyPage', () => {
  let component: SandyPage;
  let fixture: ComponentFixture<SandyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SandyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
