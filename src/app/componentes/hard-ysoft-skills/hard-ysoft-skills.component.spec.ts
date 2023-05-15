import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as HardYSoftSkillsComponent1 from "./HardYSoftSkillsComponent";

describe('HardYSoftSkillsComponent', () => {
  let component: HardYSoftSkillsComponent1.HardYSoftSkillsComponent;
  let fixture: ComponentFixture<HardYSoftSkillsComponent1.HardYSoftSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardYSoftSkillsComponent1.HardYSoftSkillsComponent]
    });
    fixture = TestBed.createComponent(HardYSoftSkillsComponent1.HardYSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
