import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFeedComponent } from './pages-feed.component';

describe('PagesFeedComponent', () => {
  let component: PagesFeedComponent;
  let fixture: ComponentFixture<PagesFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
