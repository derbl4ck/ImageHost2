import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  heading = 'Settings';
  subheading = 'Here you can see all relevant information at a glance.';
  icon = 'pe-7s-menu icon-gradient bg-tempting-azure';

  ngOnInit() {
  }

}
