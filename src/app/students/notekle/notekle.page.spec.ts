import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteklePage } from './notekle.page';

describe('NoteklePage', () => {
  let component: NoteklePage;
  let fixture: ComponentFixture<NoteklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteklePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
