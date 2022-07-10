import { User } from "./user.interfaces";

export interface Replic {
    id:         number;
    content:    string;
    createdAt:  string;
    score:      number;
    replyingTo: string;
    user:       User;
    replies:    Replic[];
}