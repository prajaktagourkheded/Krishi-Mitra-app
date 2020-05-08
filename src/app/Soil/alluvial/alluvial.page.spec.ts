import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlluvialPage } from './alluvial.page';

describe('AlluvialPage', () => {
  let component: AlluvialPage;
  let fixture: ComponentFixture<AlluvialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlluvialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlluvialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
