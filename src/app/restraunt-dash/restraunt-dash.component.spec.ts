import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntDashComponent } from './restraunt-dash.component';

describe('RestrauntDashComponent', () => {
  let component: RestrauntDashComponent;
  let fixture: ComponentFixture<RestrauntDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrauntDashComponent]
    });
    fixture = TestBed.createComponent(RestrauntDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
