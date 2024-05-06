import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Subscription } from "rxjs";
import { User } from '../../types/user.class';
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit, OnDestroy {

  public type!: 'stargazers' | 'watchers';
  public users!: User[];
  private subscription!: Subscription;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const user = params.get('user')?.toString();
      const repo = params.get('repo')?.toString();
      const type = params.get('type')?.toString();

      if ( user && repo && ( type === 'stargazers' || type === 'watchers' ) ) {
        this.type = type;

        this.fetchUsers(user, repo, type);
      }
    });
  }

  ngOnDestroy(): void {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
    }
  }

  fetchUsers( user: string, repo: string, type: string ): void {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.userService
    .getUsers(user, repo, type)
    .subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }
}
