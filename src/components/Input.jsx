import "../assets/styles/Input.css"

export default function Input({inputType, inputName, labelText}){
    return (
        <div className="input-c">
            <label htmlFor={inputName}>{labelText}</label>
            <input type={inputType} name={inputName} />
        </div>
    );
}