import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCommitteeComponent } from './house-committee.component';

describe('HouseCommitteeComponent', () => {
  let component: HouseCommitteeComponent;
  let fixture: ComponentFixture<HouseCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCommitteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
