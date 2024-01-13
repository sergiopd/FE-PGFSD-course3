import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/assets/models/bookings';
import { typeOfCabs } from '../../../assets/models/bookings';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  model: Booking = {
    atWhatTime: '',
    startLocation: '',
    endLocation: '',
    typeOfCab: '',
    intialFare: 0,
    farePerKm: 0,
    totalFare: 0,
    userID: 0,
  };
  typeOfCabs: typeOfCabs[] = ["Micro", "Mini", "Prime"];

  constructor(
    private bookingService: BookingService,
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.model);
    this.subscription = this.bookingService.addBooking(this.model).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

  calculateFare() {
    // To simulate the distnce between the two locations
    const max = 100;
    const numberOfKm = Math.floor(Math.random() * max);

    if (this.model.typeOfCab == "Micro") {
      this.model.intialFare = 50;
      this.model.farePerKm = 13;
      this.model.totalFare = this.model.intialFare + (this.model.farePerKm * numberOfKm);
    }
    else if (this.model.typeOfCab == "Mini") {
      this.model.intialFare = 150;
      this.model.farePerKm = 15;
      this.model.totalFare = this.model.intialFare + (this.model.farePerKm * numberOfKm);
    }
    else if (this.model.typeOfCab == "Prime") {
      this.model.intialFare = 200;
      this.model.farePerKm = 20;
      this.model.totalFare = this.model.intialFare + (this.model.farePerKm * numberOfKm);
    }
  }
}
