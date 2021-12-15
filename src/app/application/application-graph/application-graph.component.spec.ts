import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationGraphComponent } from './application-graph.component';

describe('ApplicationGraphComponent', () => {
  let component: ApplicationGraphComponent;
  let fixture: ComponentFixture<ApplicationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
