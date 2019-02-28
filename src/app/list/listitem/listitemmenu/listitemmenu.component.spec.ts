import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemmenuPage } from './listitemmenu.page';

describe('ListitemmenuPage', () => {
  let component: ListitemmenuPage;
  let fixture: ComponentFixture<ListitemmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListitemmenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
