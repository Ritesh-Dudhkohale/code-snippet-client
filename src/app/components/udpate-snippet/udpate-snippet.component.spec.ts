import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdpateSnippetComponent } from './udpate-snippet.component';

describe('UdpateSnippetComponent', () => {
  let component: UdpateSnippetComponent;
  let fixture: ComponentFixture<UdpateSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdpateSnippetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UdpateSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
