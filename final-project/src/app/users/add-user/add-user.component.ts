import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { CabUser } from 'src/assets/models/users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnDestroy {
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

  onSubmit() {
    console.log(this.model);
    this.subscription = this.userService.addUser(this.model).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

}
