import {User} from "./user";

export interface Mail {
    id: number;
    value: string;
    user: User;
}