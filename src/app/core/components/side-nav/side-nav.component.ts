import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isTaskCenterCollapsed: boolean = true;
  isCommunicationsCollapsed: boolean = true;
  isRecordHistoryCollapsed: boolean = true;
  isReferencesCollapsed: boolean = true;
}
