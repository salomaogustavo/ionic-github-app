import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Repo } from '../types/repo.class';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ReposService {

  private url = 'https://api.github.com/';

  constructor(
      private httpClient: HttpClient,
  ) { }

  getRepos(user: string): Observable<Repo[]> {
    return this.httpClient
      .get<Repo[]>(`${this.url}users/${user}/repos`);
  }
}
