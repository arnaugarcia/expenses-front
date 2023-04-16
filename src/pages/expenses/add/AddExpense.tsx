import './AddExpense.css'
import {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {User} from "../model/UserModel";

interface ExpenseFormData {
    name: string;
    description: string;
    amount: number;
    creatorLogin: string;
}

export function AddExpense() {
    const params = useParams();
    const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
    const groupId = params.groupId;
    const navigate = useNavigate();

    const [friends, setFriends] = useState<User[]>([]);

    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const creatorLoginRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        fetch(`${serverUrl}/api/groups/${groupId}/friends`)
            .then(response => response.json())
            .then(friends => setFriends(friends))
            .catch(error => console.error(error));
    }, []);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const userFormData: ExpenseFormData = {
            name: nameRef.current?.value || '',
            description: descriptionRef.current?.value || '',
            amount: parseInt(amountRef.current?.value!) || 0,
            creatorLogin: creatorLoginRef.current?.value || '',
        }
        fetch(`${serverUrl}/api/groups/${groupId}/expenses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userFormData)
        }).then(() => navigate(`/groups/${groupId}/expenses`))
    }

    return (
        <>
            <h2>Add a new expense to group</h2>
            <form className="add-user-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" ref={nameRef} name="name" required/>
                </div>

                <div className="form-row">
                    <label htmlFor="surnames">Description:</label>
                    <input type="text" id="surnames" ref={descriptionRef} name="surnames" required/>
                </div>

                <div className="form-row">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" ref={amountRef} step="0.01" name="amountRef" required/>
                </div>

                <div className="form-row">
                    <label htmlFor="creatorLogin">Friend:</label>
                    <select name="friend" id="friend" ref={creatorLoginRef} >
                        {friends.map((friend) => (
                            <option key={friend.login} value={friend.login}>{friend.name} {friend.surname} ({friend.login})</option>
                        ))}
                    </select>
                </div>

                <button type="submit">Add expense to group</button>
            </form>


        </>
    )
}
