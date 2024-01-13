import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { CabUser } from 'src/assets/models/users';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  email = '';
  user: CabUser = {
    userName: '',
    phone: '',
    email: '',
    userPassword: '',
  };

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.subscription = this.usersService.getUser(this.email).subscribe({
      next: data => {
        console.log(data);
        this.user = data;
      }
    });
  }
}
