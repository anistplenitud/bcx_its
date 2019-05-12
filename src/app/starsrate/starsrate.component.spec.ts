import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsrateComponent } from './starsrate.component';

describe('StarsrateComponent', () => {
  let component: StarsrateComponent;
  let fixture: ComponentFixture<StarsrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
