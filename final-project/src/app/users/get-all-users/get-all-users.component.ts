import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { CabUser } from 'src/assets/models/users';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  users: CabUser[] = [];

  constructor(
    private usersService: UsersService,
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUsers() {
    this.subscription = this.usersService.getAllUsers().subscribe({
      next: data => {
        console.log(data);
        this.users = data;
      }
    });
  }
}
