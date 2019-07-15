import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultdashboard',
  templateUrl: './defaultdashboard.component.html',
})
export class DefaultDashboardComponent implements OnInit {

  heading = 'Dashboard';
  subheading = 'Here you can see all relevant information at a glance.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  ngOnInit() {
  }

}
