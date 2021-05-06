import {Comment} from "./comment";

export interface Article {
    id: number;
    contenu: string;

    comments: Comment[];
}