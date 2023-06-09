import {User} from "./UserModel";

export interface ExpenseModel {
    name: string;
    description: string;
    amount: number;
    date: string;
    creator: User;
}

