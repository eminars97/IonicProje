import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerslistelePage } from './derslistele.page';

describe('DerslistelePage', () => {
  let component: DerslistelePage;
  let fixture: ComponentFixture<DerslistelePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerslistelePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerslistelePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
