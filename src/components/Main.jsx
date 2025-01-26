import UserForm from "./UserForm";
import "../assets/styles/Main.css"
import { useState } from "react";
import UserCard from "./UserCard";
import FiltersTab from "./FiltersTab";
import randomUsers from "../data/random-users";

export default function Main() {
    const [users, setUsers] = useState([]);

    function addUser(user) {
        setUsers([user, ...users]);
    }

    function clearAll() {
        setUsers([]);
    }

    function generateRandomUsers() {
        setUsers([...randomUsers, ...users]);
    }

    return (
        <main>
            <UserForm addUser={addUser} />
            <FiltersTab onClearAll={clearAll} onRandomUser={generateRandomUsers} />
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