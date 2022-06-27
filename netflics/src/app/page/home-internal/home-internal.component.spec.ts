import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInternalComponent } from './home-internal.component';

describe('HomeInternalComponent', () => {
  let component: HomeInternalComponent;
  let fixture: ComponentFixture<HomeInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInternalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
