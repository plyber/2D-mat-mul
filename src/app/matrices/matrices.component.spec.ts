import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricesComponent } from './matrices.component';

describe('MatricesComponent', () => {
  let component: MatricesComponent;
  let fixture: ComponentFixture<MatricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatricesComponent]
    });
    fixture = TestBed.createComponent(MatricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
