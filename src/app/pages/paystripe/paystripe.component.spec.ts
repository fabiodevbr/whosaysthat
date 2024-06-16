import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaystripeComponent } from './paystripe.component';

describe('PaystripeComponent', () => {
  let component: PaystripeComponent;
  let fixture: ComponentFixture<PaystripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaystripeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaystripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
