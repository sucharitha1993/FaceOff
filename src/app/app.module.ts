import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PasswordPage } from '../pages/password/password';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchDoctors } from '../pages/searchdoctors/searchdoctors';
import { DoctorDetailsPage } from '../pages/doctordetails/doctordetails';
import { NotificationPage } from '../pages/notification/notification';
import { RecordsPage } from '../pages/records/records';
import { ReportDetailPage } from '../pages/reportdetails/reportdetails';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    SearchDoctors,
    DoctorDetailsPage,
    NotificationPage,
    TabsPage,
    RecordsPage,
    ReportDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    RegisterPage,
    PasswordPage,
    SearchDoctors,
    DoctorDetailsPage,
    NotificationPage,
    TabsPage,
    RecordsPage,
    ReportDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
