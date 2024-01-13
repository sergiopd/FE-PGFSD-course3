import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Booking } from 'src/assets/models/bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly baseUrl = 'http://localhost:9090/';
  private readonly usersUrl = 'bookings';

  constructor(
    private http: HttpClient
  ) { }

  public addBooking(booking: Booking) {
    const userData = new HttpParams()
    .set('atWhatTime', booking.atWhatTime.toString())
    .set('startLocation', booking.startLocation.toString())
    .set('endLocation', booking.endLocation.toString())
    .set('typeOfCab', booking.typeOfCab.toString())
    .set('intialFare', booking.intialFare.toString())
    .set('farePerKm', booking.farePerKm.toString())
    .set('totalFare', booking.totalFare.toString())
    .set('userID', booking.userID.toString())

    return this.http.post(`${this.baseUrl}${this.usersUrl}/add`, { params: userData });
  }

  public getAllBooking() {
    return this.http.get<Booking[]>(`${this.baseUrl}${this.usersUrl}/listBookings`);
  }

  public getBooking(id: number) {
    const userEmail = new HttpParams().set('bookID', id)
    return this.http.get<Booking>(`${this.baseUrl}${this.usersUrl}/getBooking`, { params: userEmail });
  }

  public updateBooking(booking: Booking) {
    const bookingData = new HttpParams()
    .set('atWhatTime', booking.atWhatTime.toString())
    .set('startLocation', booking.startLocation.toString())
    .set('endLocation', booking.endLocation.toString())
    .set('typeOfCab', booking.typeOfCab.toString())
    .set('intialFare', booking.intialFare.toString())
    .set('farePerKm', booking.farePerKm.toString())
    .set('totalFare', booking.totalFare.toString())
    .set('userID', booking.userID.toString())

    return this.http.post(`${this.baseUrl}${this.usersUrl}/update`, { params: bookingData });
  }

  public deleteBooking(id: number) {
    const userEmail = new HttpParams().set('bookID', id)
    return this.http.post(`${this.baseUrl}${this.usersUrl}/delete`, { params: userEmail });
  }
}
