import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusulajeComponent } from './fusulaje.component';

describe('FusulajeComponent', () => {
  let component: FusulajeComponent;
  let fixture: ComponentFixture<FusulajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusulajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusulajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
