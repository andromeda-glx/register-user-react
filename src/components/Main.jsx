import UserForm from "./UserForm";
import "../assets/styles/Main.css"
import { useState } from "react";
import UserCard from "./UserCard";
import ClearAll from "./ClearAll";

export default function Main() {
    const [users, setUsers] = useState([]);

    function addUser(user) {
        setUsers([...users, user]);
    }

    function clearAll() {
        setUsers([]);
    }

    return (
        <main>
            <UserForm addUser={addUser} />
            <ClearAll click={clearAll} />
            <div className="users-c">
                <ul className="users">
                    {users.map((user, index) => (
                        <UserCard
                            key={index}
                            username={user.name}
                            userEmail={user.email}
                            userDate={user.date}
                        />
                    ))}
                </ul>
            </div>
        </main>
    );
}