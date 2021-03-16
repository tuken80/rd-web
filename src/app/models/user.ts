import {Mail} from "./mail";

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    birthday: Date;
    mail: Mail;
}