import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListingComponent } from './application-listing.component';

describe('ApplicationListingComponent', () => {
  let component: ApplicationListingComponent;
  let fixture: ComponentFixture<ApplicationListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
