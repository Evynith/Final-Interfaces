import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExternalComponent } from './home-external.component';

describe('HomeExternalComponent', () => {
  let component: HomeExternalComponent;
  let fixture: ComponentFixture<HomeExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
