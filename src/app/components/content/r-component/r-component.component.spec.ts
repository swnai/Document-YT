import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RComponentComponent } from './r-component.component';

describe('RComponentComponent', () => {
  let component: RComponentComponent;
  let fixture: ComponentFixture<RComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
