import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NothesabiPage } from './nothesabi.page';

describe('NothesabiPage', () => {
  let component: NothesabiPage;
  let fixture: ComponentFixture<NothesabiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NothesabiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NothesabiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
