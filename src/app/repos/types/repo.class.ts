import { RepoInterface } from "./repo.interface";

export class Repo {
  id: number;
  name: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;

  constructor(data: RepoInterface) {
    this.id = data.id;
    this.name = data.name;
    this.stargazers_count = data.stargazers_count;
    this.watchers_count = data.watchers_count;
    this.forks_count = data.forks_count;
  }
}
