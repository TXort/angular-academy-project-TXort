import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowContainerComponent } from './add-show-container.component';

describe('AddShowContainerComponent', () => {
  let component: AddShowContainerComponent;
  let fixture: ComponentFixture<AddShowContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShowContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
