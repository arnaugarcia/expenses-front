interface User {
    name: string;
    surname: string;
    login: string;
}

export interface ExpenseModel {
    name: string;
    description: string;
    amount: number;
    date: string;
    creator: User;
}

