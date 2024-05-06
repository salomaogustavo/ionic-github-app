import { Component, OnDestroy, OnInit } from "@angular/core";
import { ReposService } from "../services/repo.service";
import { Subscription } from "rxjs";
import { Repo } from "../../types/repo.class";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './repos-list.component.html',
})
export class ReposListComponent implements OnInit, OnDestroy {

  public user!: string;
  public repos!: Repo[];
  private subscription!: Subscription;

  constructor(
    private reposService: ReposService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const user = params.get('user')?.toString();

      if ( user ) {
        this.user = user;

        this.fetchRepo(this.user);
      }
    });
  }

  ngOnDestroy(): void {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
    }
  }

  fetchRepo( user: string ): void {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.reposService
    .getRepos(user)
    .subscribe(
      (response: Repo[]) => {
        this.repos = response;
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }
}
