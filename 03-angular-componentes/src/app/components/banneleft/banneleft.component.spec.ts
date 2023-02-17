import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanneleftComponent } from './banneleft.component';

describe('BanneleftComponent', () => {
  let component: BanneleftComponent;
  let fixture: ComponentFixture<BanneleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanneleftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanneleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
