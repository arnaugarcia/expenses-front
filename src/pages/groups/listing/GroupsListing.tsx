import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GroupModel} from "../model/GroupModel";

function GroupsListing() {

    const navigate = useNavigate();

    const [groups, setGroups] = useState<GroupModel[]>([]);

    useEffect(() => {
        const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
        fetch(`${serverUrl}/api/groups`)
            .then((response) => response.json())
            .then((groups) => setGroups(groups))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div className="expenses">
            <h2>Groups</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {groups.map(group => (
                    <tr key={group.id} onClick={() => navigate(`/groups/${group.id}/expenses`)}>
                        <td>{group.name}</td>
                        <td>{group.description}</td>
                        <td></td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    );

}

export default GroupsListing;
