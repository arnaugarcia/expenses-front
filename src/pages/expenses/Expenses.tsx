import './Expenses.css';
function Expenses() {
    return (
        <>
            <div className="expenses">
                <h2>Expenses</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Expense Description</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2023-04-10</td>
                        <td>Groceries</td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>2023-04-09</td>
                        <td>Dinner</td>
                        <td>$30.00</td>
                    </tr>
                    <tr>
                        <td>2023-04-08</td>
                        <td>Movie Tickets</td>
                        <td>$25.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="summary">
                <h2>Summary</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Total Expenses</th>
                        <th>Amount Paid</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>$105.00</td>
                        <td>$35.00</td>
                        <td>$70.00</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Expenses;
