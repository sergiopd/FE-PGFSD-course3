import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnDestroy {
  subscription: Subscription = new Subscription();
  id = 0;

  constructor(
    private bookingService: BookingService,
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.id);
    this.subscription = this.bookingService.deleteBooking(this.id).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

}
