import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/get-user', canActivate: [AuthGuard], component: GetUserComponent },
  { path: 'users/get-all-users', canActivate: [AuthGuard], component: GetAllUsersComponent },
  { path: 'users/update', canActivate: [AuthGuard], component: UpdateUserComponent },
  { path: 'users/delete', canActivate: [AuthGuard], component: DeleteUserComponent },
  { path: 'bookings/add', canActivate: [AuthGuard], component: AddBookingComponent },
  { path: 'bookings/get-booking', canActivate: [AuthGuard], component: GetBookingComponent },
  { path: 'bookings/get-all-bookings', canActivate: [AuthGuard], component: GetAllBookingsComponent },
  { path: 'bookings/update', canActivate: [AuthGuard], component: UpdateBookingComponent },
  { path: 'bookings/delete', canActivate: [AuthGuard], component: DeleteBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
