import { RepoInterface } from "./repo.interface";
import { UserInterface } from "../../home/types/user.interface";

export class Repo {
  id: number;
  name: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  html_url: string;
  owner: UserInterface;

  constructor(data: RepoInterface) {
    this.id = data.id;
    this.name = data.name;
    this.stargazers_count = data.stargazers_count;
    this.watchers_count = data.watchers_count;
    this.forks_count = data.forks_count;
    this.html_url = data.html_url;
    this.owner = data.owner;
  }
}
