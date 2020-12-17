import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CaregiverComponent } from './components/caregiver/caregiver.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDBBootstrapModulesPro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PersonComponent } from './components/person/person.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'caregiver', component: CaregiverComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'person', component: PersonComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CaregiverComponent,
    PersonComponent,
    PatientComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MDBBootstrapModulesPro.forRoot(),
    NgbModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  exports: [BsDropdownModule],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
