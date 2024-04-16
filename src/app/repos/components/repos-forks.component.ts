import { Component, OnDestroy, OnInit } from "@angular/core";
import { ReposService } from "../services/repo.service";
import { Subscription } from "rxjs";
import { Repo } from "../types/repo.class";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './repos-forks.component.html',
})
export class ReposForksComponent implements OnInit, OnDestroy {

    public url = "https://github.com/";
    public user!: string;
    public repo!: string;
    public forks!: Repo[];
    private subscription!: Subscription;

    constructor(
        private reposService: ReposService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const user = params.get('user')?.toString();
            const repo = params.get('repo')?.toString();

            if (user && repo) {
                this.user = user;
                this.repo = repo;

                this.fetchForks(this.user, this.repo);
            }
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    fetchForks(user: string, repo: string): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        this.subscription = this.reposService
        .getForks(user, repo)
        .subscribe(
            (response: Repo[]) => {
                this.forks = response;

                console.log(this.forks[0].owner);
            },
            (error: Error) => {
                console.error(error);
            }
        );
    }
}
