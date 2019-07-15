import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  heading = 'User Management';
  subheading = 'Here you can see all relevant information at a glance.';
  icon = 'pe-7s-users icon-gradient bg-tempting-azure';

  ngOnInit() {
  }

}
