import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/assets/models/bookings';

@Component({
  selector: 'app-get-booking',
  templateUrl: './get-booking.component.html',
  styleUrls: ['./get-booking.component.css']
})
export class GetBookingComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  id = 0;
  booking: Booking = {
    atWhatTime: '',
    startLocation: '',
    endLocation: '',
    typeOfCab: '',
    intialFare: 0,
    farePerKm: 0,
    totalFare: 0,
    userID: 0,
  };

  constructor(
    private bookingService: BookingService,
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.id);
    this.subscription = this.bookingService.getBooking(this.id).subscribe({
      next: data => {
        console.log(data);
        this.booking = data;
      }
    });
  }
}
