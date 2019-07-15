import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  heading = 'My Profile';
  subheading = 'Here you can see all relevant information at a glance.';
  icon = 'pe-7s-lock icon-gradient bg-tempting-azure';

  ngOnInit() {
  }

}
