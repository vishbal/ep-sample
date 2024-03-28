import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = '';

  constructor(private titleSvc: Title) { }

  ngOnInit(): void {
    this.titleSvc.setTitle('Environmental Platform')
    this.title = this.titleSvc.getTitle();
  }


}
