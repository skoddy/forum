import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Nudeln',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Kartoffeln',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Fleisch',
      updated: new Date('1/28/16'),
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
