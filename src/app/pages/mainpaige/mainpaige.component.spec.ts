import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpaigeComponent } from './mainpaige.component';

describe('MainpaigeComponent', () => {
  let component: MainpaigeComponent;
  let fixture: ComponentFixture<MainpaigeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpaigeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpaigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
