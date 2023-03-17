import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedformComponent } from './submittedform.component';

describe('SubmittedformComponent', () => {
  let component: SubmittedformComponent;
  let fixture: ComponentFixture<SubmittedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmittedformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
