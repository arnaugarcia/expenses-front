import './Expenses.css';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ExpenseModel} from "./model/ExpensesModel";

function ExpensesListing() {

    const params = useParams();
    const [expenses, setExpenses] = useState<ExpenseModel[]>()
    const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
    const groupId = params.groupId;

    useEffect(() => {

        fetch(`${serverUrl}/api/groups/${groupId}/expenses`)
            .then(response => response.json())
            .then(expenses => setExpenses(expenses))
            .catch(error => console.error(error));

    }, []);

    return (
        <>
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
                            <tr>
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
        </>
    )
}

export default ExpensesListing;
