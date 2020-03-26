import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirationsItemComponent } from './expirations-item.component';

describe('ExpirationsItemComponent', () => {
  let component: ExpirationsItemComponent;
  let fixture: ComponentFixture<ExpirationsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirationsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpirationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
