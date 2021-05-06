import {Article} from "./article";
import {User} from "./user";

export interface Comment {
    id: number;
    message: string;

    author: User;
    post: Article;
}