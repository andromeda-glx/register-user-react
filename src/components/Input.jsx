import "../assets/styles/Input.css"

export default function Input({ inputType, inputName, labelText, inputDefaultValue }) {
    return (
        <div className="input-c">
            <label htmlFor={inputName}>{labelText}</label>
            <input
                type={inputType}
                name={inputName}
                defaultValue={inputDefaultValue}
            />
        </div>
    );
}