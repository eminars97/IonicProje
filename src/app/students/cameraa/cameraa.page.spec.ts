import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraaPage } from './cameraa.page';

describe('CameraaPage', () => {
  let component: CameraaPage;
  let fixture: ComponentFixture<CameraaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
