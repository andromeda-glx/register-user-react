import Button from "./Button";
import "../assets/styles/ClearAll.css"

export default function ClearAll({ click }) {
    return (
        <div className="clear-all-c">
            <Button text={"Clear All"} buttonClass={"clear-all-btn"} click={click} />
        </div>
    );
}