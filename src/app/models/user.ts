import {Mail} from "./mail";
import {Phone} from "./phone";

export type UserRoleType = "admin" | "client";

export interface User {
    id: number;
    genre: string;
    firstname: string;
    lastname: string;
    birthday: Date;
    role: UserRoleType;
    mails: Mail[];
    phones: Phone[];
}