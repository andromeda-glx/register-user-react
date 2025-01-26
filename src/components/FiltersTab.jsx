import Button from "./Button";
import "../assets/styles/FiltersTab.css"

export default function FiltersTab({ onClearAll, onRandomUser }) {
    return (
        <div className="filters-c">
            <Button text={"Clear All"} buttonClass={"clear-all-btn"} click={onClearAll} />
            <Button text={"Generate Random Users"} buttonClass={("random-users-btn")} click={onRandomUser} />
        </div>
    );
}