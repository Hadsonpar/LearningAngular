import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerightComponent } from './banneright.component';

describe('BannerightComponent', () => {
  let component: BannerightComponent;
  let fixture: ComponentFixture<BannerightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
