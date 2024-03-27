import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { HelpComponent } from '../help/help.component';
import { AccountComponent } from '../account/account.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    host: { class: 'd-block' },
    imports: [NgbPopoverModule, SideNavComponent, HelpComponent, AccountComponent, RouterLink]
})
export class HeaderComponent {


}
