import './Expenses.css';
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ExpenseModel} from "./model/ExpensesModel";
import {UserExpenseSummary} from "./model/ExpensesSummary";

function ExpensesListing() {

    const navigate = useNavigate();
    const params = useParams();
    const [expenses, setExpenses] = useState<ExpenseModel[]>()
    const [expensesSummary, setExpensesSummary] = useState<UserExpenseSummary[]>()
    const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
    const groupId = params.groupId;

    useEffect(() => {

        fetch(`${serverUrl}/api/groups/${groupId}/expenses`)
            .then(response => response.json())
            .then(expenses => setExpenses(expenses))
            .catch(error => console.error(error));

        fetch(`${serverUrl}/api/groups/${groupId}/summary`)
            .then(response => response.json())
            .then(summary => setExpensesSummary(summary))
            .catch(error => console.error(error));

    }, []);

    return (
        <>
            <div className={"table-header"}>
                <button className="btn btn-primary btn-add-expense" onClick={() => navigate(`/groups/${groupId}/add-friend`)}>Add Friend</button>
                <button className="btn btn-primary btn-add-expense" onClick={() => navigate(`/groups/${groupId}/expenses/add`)}>Add Expense</button>
            </div>
            <div className="expenses">
                <h2>Expenses of group {groupId}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Expense Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>User</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        expenses?.map(expenses => (
                            <tr key={expenses.date}>
                                <td>{expenses.name}</td>
                                <td>{expenses.description}</td>
                                <td>{expenses.amount}</td>
                                <td>{expenses.date}</td>
                                <td>{expenses.creator.name} {expenses.creator.surname}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="summary">
                <h2>Pending payments</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Payer</th>
                        <th></th>
                        <th>Payee</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {expensesSummary?.map((summary, index) => (
                        <tr key={index}>
                            <th>{summary.payer.name} {summary.payer.surname}</th>
                            <th>➡️</th>
                            <th>{summary.payee.name} {summary.payee.surname}</th>
                            <th>{summary.amount}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ExpensesListing;
