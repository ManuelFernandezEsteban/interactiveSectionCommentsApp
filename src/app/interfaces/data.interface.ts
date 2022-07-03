import { User } from "./user.interfaces";
import { Comment } from "./comment.interfaces";

export interface Data{
    currentUser:User;
    comments:Comment[];
}