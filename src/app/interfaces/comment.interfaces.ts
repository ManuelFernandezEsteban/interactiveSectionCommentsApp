import { Replic } from "./replic.interfaces";
import { User } from "./user.interfaces";



export interface Comment {
    id:        number;
    content:   string;
    createdAt: string;
    score:     number;
    user:      User;
    replies?:   Replic[];
}