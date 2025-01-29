import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalLinksComponent } from './internal-links.component';

describe('InternalLinksComponent', () => {
  let component: InternalLinksComponent;
  let fixture: ComponentFixture<InternalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
