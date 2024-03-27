import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [NgClass],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isTaskCenterCollapsed: boolean = true;
  isCommunicationsCollapsed: boolean = true;
  isRecordHistoryCollapsed: boolean = true;
  isReferencesCollapsed: boolean = true;
}
