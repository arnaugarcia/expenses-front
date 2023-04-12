import {User} from "./UserModel";

export interface UserExpenseSummary {
    payer: User;
    amount: number;
    payee: User;
}
