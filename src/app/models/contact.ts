import {Mail} from "./mail";
import {Phone} from "./phone";
import {User} from "./user";

export interface Contact {
    id: number;
    sujet: string;
    details:  string;

    mail: Mail;
    phone: Phone;
    user: User;
}