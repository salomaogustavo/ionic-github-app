import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../../types/user.class';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './user-search.component.html',
})
export class UserSearchComponent implements OnDestroy {

  gitForm = new FormGroup({
    user: new FormControl('', Validators.required),
  });

  public user!: User;
  private subscription!: Subscription;

  constructor(
    private userService: UserService,
  ) { }

  ngOnDestroy(): void {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit() {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
    }

    const user = this.gitForm.get('user')?.value;

    if ( !user ) {
      return;
    }

    this.subscription = this.userService
    .getUser(user)
    .subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }
}
