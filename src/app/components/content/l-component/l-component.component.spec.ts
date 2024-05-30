import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LComponentComponent } from './l-component.component';

describe('LComponentComponent', () => {
  let component: LComponentComponent;
  let fixture: ComponentFixture<LComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
