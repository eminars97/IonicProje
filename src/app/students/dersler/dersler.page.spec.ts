import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerslerPage } from './dersler.page';

describe('DerslerPage', () => {
  let component: DerslerPage;
  let fixture: ComponentFixture<DerslerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerslerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerslerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
