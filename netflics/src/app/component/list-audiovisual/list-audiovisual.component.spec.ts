import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAudiovisualComponent } from './list-audiovisual.component';

describe('ListAudiovisualComponent', () => {
  let component: ListAudiovisualComponent;
  let fixture: ComponentFixture<ListAudiovisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAudiovisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAudiovisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
