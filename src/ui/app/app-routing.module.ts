import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
import { err404Component } from './Pages/404/err404.component';
// Components
import { AccordionsComponent } from './Pages/Components/accordions/accordions.component';
import { CarouselComponent } from './Pages/Components/carousel/carousel.component';
import { ModalsComponent } from './Pages/Components/modals/modals.component';
import { PaginationComponent } from './Pages/Components/pagination/pagination.component';
import { ProgressBarComponent } from './Pages/Components/progress-bar/progress-bar.component';
import { TabsComponent } from './Pages/Components/tabs/tabs.component';
import {
    TooltipsPopoversComponent
} from './Pages/Components/tooltips-popovers/tooltips-popovers.component';
// DEMO PAGES
// Dashboards
import { DefaultDashboardComponent } from './Pages/Dashboards/default/defaultdashboard.component';
// Elements
import { StandardComponent } from './Pages/Elements/Buttons/standard/standard.component';
import { CardsComponent } from './Pages/Elements/cards/cards.component';
import { DropdownsComponent } from './Pages/Elements/dropdowns/dropdowns.component';
import { IconsComponent } from './Pages/Elements/icons/icons.component';
import { ListGroupsComponent } from './Pages/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './Pages/Elements/timeline/timeline.component';
// Forms Elements
import { ControlsComponent } from './Pages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './Pages/Forms/Elements/layout/layout.component';
import { LibraryComponent } from './Pages/Library/library.component';
import { ProfileComponent } from './Pages/Profile/profile.component';
import { SettingsComponent } from './Pages/Settings/settings.component';
// Tables
import { TablesMainComponent } from './Pages/Tables/tables-main/tables-main.component';
// Pages
import { LoginBoxedComponent } from './Pages/UserPages/login/login.component';
import { UsersComponent } from './Pages/Users/users.component';
// Widgets
import { ChartBoxes3Component } from './Pages/Widgets/chart-boxes3/chart-boxes3.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      // Dashboads

       {path: '', component: DefaultDashboardComponent, data: {extraParameter: 'dashboardsMenu'}},

       {path: 'lib', component: LibraryComponent, data: {extraParameter: 'dashboardsMenu'}},
       {path: 'settings', component: SettingsComponent, data: {extraParameter: 'dashboardsMenu'}},
       {path: 'users', component: UsersComponent, data: {extraParameter: 'dashboardsMenu'}},
       {path: 'profile', component: ProfileComponent, data: {extraParameter: 'dashboardsMenu'}},
       {path: 'logout', component: DefaultDashboardComponent, data: {extraParameter: 'dashboardsMenu'}},
       {path: '404', component: err404Component, data: {extraParameter: ''}},

      // Elements

      {path: 'elements/buttons-standard', component: StandardComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/icons', component: IconsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/cards', component: CardsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/list-group', component: ListGroupsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'elements/timeline', component: TimelineComponent, data: {extraParameter: 'elementsMenu'}},

      // Components

      {path: 'components/tabs', component: TabsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/accordions', component: AccordionsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/modals', component: ModalsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/progress-bar', component: ProgressBarComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/carousel', component: CarouselComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/pagination', component: PaginationComponent, data: {extraParameter: 'componentsMenu'}},

      // Tables

      {path: 'tables/bootstrap', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'}},

      // Widgets

      {path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'pagesMenu3'}},

      // Forms Elements

      {path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formElementsMenu'}},
      {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'}},
    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      {path: 'login', component: LoginBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
