import { UserInterface } from "./user.interface";

export interface RepoInterface {
  id: number;
  name: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  html_url: string;
  owner: UserInterface;
}
