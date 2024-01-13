import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

 email = '';

  constructor(
    private userService: UsersService,
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.email);
    this.subscription = this.userService.deleteUser(this.email).subscribe({
      next: data => {
        console.log(data);
      }
    });
  }
}
