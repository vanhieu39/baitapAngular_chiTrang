import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiaTrangComponent } from './chia-trang.component';

describe('ChiaTrangComponent', () => {
  let component: ChiaTrangComponent;
  let fixture: ComponentFixture<ChiaTrangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiaTrangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiaTrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
