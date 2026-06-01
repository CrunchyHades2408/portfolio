import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalCard } from './terminal-card';

describe('TerminalCard', () => {
  let component: TerminalCard;
  let fixture: ComponentFixture<TerminalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
