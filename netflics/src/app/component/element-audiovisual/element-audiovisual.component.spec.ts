import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAudiovisualComponent } from './element-audiovisual.component';

describe('ElementAudiovisualComponent', () => {
  let component: ElementAudiovisualComponent;
  let fixture: ComponentFixture<ElementAudiovisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementAudiovisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementAudiovisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
