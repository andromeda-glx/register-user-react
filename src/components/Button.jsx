export default function Button({text, buttonClass, click}){
    return (
        <button className={`btn ${buttonClass}`} onClick={click} >
            {text}
        </button>
    );
}