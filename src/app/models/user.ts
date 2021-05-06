import {Mail} from "./mail";
import {Phone} from "./phone";
import {Comment} from "./comment";

export type UserGenreType = "masculin" | "feminin" | "autre";
export type UserRoleType = "admin" | "client";

export interface User {
    id: number;
    genre: UserGenreType;
    firstname: string;
    lastname: string;
    birthday: Date;
    role: UserRoleType;
    mails: Mail[];
    phones: Phone[];

    comments: Comment[];
}