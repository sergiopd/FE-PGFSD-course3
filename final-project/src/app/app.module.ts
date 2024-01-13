import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { GetUserComponent } from './users/get-user/get-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { AddBookingComponent } from './bookings/add-booking/add-booking.component';
import { GetBookingComponent } from './bookings/get-booking/get-booking.component';
import { GetAllBookingsComponent } from './bookings/get-all-bookings/get-all-bookings.component';
import { DeleteBookingComponent } from './bookings/delete-booking/delete-booking.component';
import { UpdateBookingComponent } from './bookings/update-booking/update-booking.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    DeleteUserComponent,
    GetAllUsersComponent,
    GetUserComponent,
    UpdateUserComponent,
    AddBookingComponent,
    GetBookingComponent,
    GetAllBookingsComponent,
    DeleteBookingComponent,
    UpdateBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
