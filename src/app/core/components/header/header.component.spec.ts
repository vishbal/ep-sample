import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { HelpComponent } from '../help/help.component';
import { AccountComponent } from '../account/account.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavComponent, HeaderComponent, SideNavComponent, HelpComponent, AccountComponent, RouterTestingModule],
      providers: [NgbPopoverModule, RouterLink]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Side Nav', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-side-nav')).toBeTruthy();
  });
});
