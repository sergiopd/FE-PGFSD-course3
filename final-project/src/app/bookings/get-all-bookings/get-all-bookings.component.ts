import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/assets/models/bookings';

@Component({
  selector: 'app-get-all-bookings',
  templateUrl: './get-all-bookings.component.html',
  styleUrls: ['./get-all-bookings.component.css']
})
export class GetAllBookingsComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  bookings: Booking[] = [];

  constructor(
    private usersService: BookingService,
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUsers() {
    this.subscription = this.usersService.getAllBooking().subscribe({
      next: data => {
        console.log(data);
        this.bookings = data;
      }
    });
  }
}
