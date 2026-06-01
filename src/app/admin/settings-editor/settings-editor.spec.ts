import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEditor } from './settings-editor';

describe('SettingsEditor', () => {
  let component: SettingsEditor;
  let fixture: ComponentFixture<SettingsEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
