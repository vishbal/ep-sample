import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ep-sample';
  showSidebar: boolean = false;

  sidebarCollapse() {
    this.showSidebar = !this.showSidebar;
  }

}
