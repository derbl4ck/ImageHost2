// BOOTSTRAP COMPONENTS
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// Gallery
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
// import { ChartsModule } from 'ng2-charts';
import {
    PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';

import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// LAYOUT
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
// FOOTER
import { FooterComponent } from './Layout/Components/footer/footer.component';
import {
    SearchBoxComponent
} from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';
// HEADER
import { HeaderComponent } from './Layout/Components/header/header.component';
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';
// SIDEBAR
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
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
import { RegularComponent } from './Pages/Tables/regular/regular.component';
import { TablesMainComponent } from './Pages/Tables/tables-main/tables-main.component';
// Pages
import { LoginBoxedComponent } from './Pages/UserPages/login/login.component';
import { UsersComponent } from './Pages/Users/users.component';
// Widgets
import { ChartBoxes3Component } from './Pages/Widgets/chart-boxes3/chart-boxes3.component';
import { ArchitectUIState, rootReducer } from './ThemeOptions/store';
import { ConfigActions } from './ThemeOptions/store/config.actions';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    // LAYOUT

    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,

    // HEADER

    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR

    SidebarComponent,
    LogoComponent,


    // FOOTER

    FooterComponent,

    // DEMO PAGES

    // Dashboards

    DefaultDashboardComponent,
    UsersComponent,

    // User Pages

    LoginBoxedComponent,
    err404Component,
    ProfileComponent,
    SettingsComponent,
    LibraryComponent,

    // Elements

    StandardComponent,
    IconsComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,

    // Components

    AccordionsComponent,
    TabsComponent,
    CarouselComponent,
    ModalsComponent,
    ProgressBarComponent,
    PaginationComponent,
    TooltipsPopoversComponent,

    // Tables

    RegularComponent,
    TablesMainComponent,

    // Dashboard Boxes

    ChartBoxes3Component,


    // Form Elements

    ControlsComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,

    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Charts

    // ChartsModule,

    // Gallery
    MasonryGalleryModule,
  ],
  providers: [
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              devTool: DevToolsExtension) {
    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
