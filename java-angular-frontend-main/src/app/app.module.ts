import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
   
import { CategoryModule } from './category/category.module';
import { HeaderComponent } from './Component/Header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import { HomeComponent } from './Home/home/home.component';

import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './Component/Footer/footer/footer.component';
import { AdvantagesComponent } from './Pages/Benefits/advantages/advantages.component';
import { ContactComponent } from './Pages/Contact/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AdvantagesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule,
    HttpClientModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    
    
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
