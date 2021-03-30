import {User} from "./user";

export interface Mail {
    id: number;
    adresse: string;
    user: User;
}