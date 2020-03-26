import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinItemComponent } from './tin-item.component';

describe('TinItemComponent', () => {
  let component: TinItemComponent;
  let fixture: ComponentFixture<TinItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
