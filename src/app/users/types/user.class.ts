import { UserInterface } from "./user.interface";

export class User {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    bio: string;

    constructor(data: UserInterface) {
        this.id = data.id;
        this.login = data.login;
        this.avatar_url = data.avatar_url;
        this.name = data.name;
        this.bio = data.bio;
    }
}
