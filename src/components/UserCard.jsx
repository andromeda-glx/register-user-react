import "../assets/styles/UserCard.css"
import avatarImg from "../assets/images/avatar.png"

export default function UserCard({ username, userEmail, userDate }) {
    return (
        <li className="user-card">
            <div className="user-pic-c">
                <img src={avatarImg} alt="user avatar" />
            </div>
            <div className="user-info">
                <h3>{username}</h3>
                <p>{userEmail}</p>
                <p>{userDate.toLocaleDateString()}</p>
            </div>
        </li>
    );
}