import {Mail} from "./mail";

export interface Contact {
    id: number;
    mail: Mail;
    subject: string;
    content:  Text;
}