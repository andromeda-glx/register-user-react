import "../assets/styles/UserForm.css"
import Button from "./Button";
import Input from "./Input";

export default function UserForm({ addUser }) {
    function handleClick(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const date = new Date(formData.get("date"));

        addUser({name, email, date});
    }

    return (
        <section className="user-form-c">
            <form onSubmit={handleClick} className="user-form">
                <Input
                    inputType={"text"}
                    inputName={"name"}
                    labelText={"Username: "}
                    inputDefaultValue={"JohnDoe"}
                />
                <Input
                    inputType={"email"}
                    inputName={"email"}
                    labelText={"Email: "}
                    inputDefaultValue={"something@example.com"}
                />
                <Input
                    inputType={"date"}
                    inputName={"date"}
                    labelText={"Date of Birth: "}
                    inputDefaultValue={"1999-01-01"}
                />
                <Button text={"Register User"} buttonClass={"register-btn"} />
            </form>
        </section>
    );
}