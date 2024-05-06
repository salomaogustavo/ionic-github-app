import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from '../../types/user.class';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private url = 'https://api.github.com/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUser( user: string ): Observable<User> {
    return this.httpClient.get<User>(`${this.url}users/${user}`);
  }

  getUsers( user: string, repo: string, type: string ): Observable<User[]> {
    return this.httpClient
    .get<User[]>(`${this.url}repos/${user}/${repo}/${type}`);
  }
}
