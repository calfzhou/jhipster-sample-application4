import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication4SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication4CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication4AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication4HomeModule } from './home/home.module';
import { JhipsterSampleApplication4EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication4SharedModule,
    JhipsterSampleApplication4CoreModule,
    JhipsterSampleApplication4HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication4EntityModule,
    JhipsterSampleApplication4AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterSampleApplication4AppModule {}
