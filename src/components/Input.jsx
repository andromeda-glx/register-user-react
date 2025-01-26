import "../assets/styles/Input.css"

export default function Input({ inputType, inputName, inputPlaceholder, labelText }) {
    return (
        <div className="input-c">
            <label htmlFor={inputName}>{labelText}</label>
            <input
                className="user-input"
                type={inputType}
                name={inputName}
                placeholder={inputPlaceholder}
            />
        </div>
    );
}