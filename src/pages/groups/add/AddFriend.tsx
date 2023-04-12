import './AddFriend.css'
import {useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

interface UserFormData {
    name: string;
    surnames: string;
    login: string;
}

export function GroupAddFriend() {
    const params = useParams();
    const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
    const groupId = params.groupId;
    const navigate = useNavigate();

    const nameRef = useRef<HTMLInputElement>(null);
    const surnamesRef = useRef<HTMLInputElement>(null);
    const loginRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<UserFormData>({ name: '', surnames: '', login: '' });

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
       const userFormData: UserFormData = {
           name: nameRef.current?.value || '',
           surnames: surnamesRef.current?.value || '',
           login: loginRef.current?.value || '',
       }
       fetch(`${serverUrl}/api/groups/${groupId}/friends`, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(userFormData)
       }).then(() => navigate(`/groups/${groupId}/expenses`))
    }

    return (
        <>
            <h2>Add a new friend</h2>
            <form className="add-user-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" ref={nameRef} name="name" required/>
                </div>

                <div className="form-row">
                    <label htmlFor="surnames">Surnames:</label>
                    <input type="text" id="surnames" ref={surnamesRef} name="surnames" required/>
                </div>

                <div className="form-row">
                    <label htmlFor="login">Login:</label>
                    <input type="text" id="login" ref={loginRef} name="login" required/>
                </div>

                <button type="submit">Add User</button>
            </form>


        </>
    )
}
