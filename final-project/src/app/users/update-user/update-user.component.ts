import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { CabUser } from 'src/assets/models/users';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  subscription: Subscription = new Subscription();

  model: CabUser = {
    userName: '',
    phone: '',
    email: '',
    userPassword: '',
  };

  constructor(
    private userService: UsersService,
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateServer() {
    console.log(this.model);
    this.subscription = this.userService.updateUser(this.model).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }
}
