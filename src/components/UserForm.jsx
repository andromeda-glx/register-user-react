import "../assets/styles/UserForm.css"
import Button from "./Button";
import Input from "./Input";

export default function UserForm({ addUser }) {
    function handleClick(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const date = formData.get("date");

        if (name && email && date) {
            const formattedDate = new Date(date);
            document.querySelectorAll(".user-input").forEach(input => input.value = "");
            addUser({ name, email, date: formattedDate });
        }
        else{
            alert("Inputs cannot be empty");
        }
    }

    return (
        <section className="user-form-c">
            <form onSubmit={handleClick} className="user-form">
                <Input
                    inputType={"text"}
                    inputName={"name"}
                    labelText={"Username: "}
                    inputPlaceholder={"JohnDoe123"}
                />
                <Input
                    inputType={"email"}
                    inputName={"email"}
                    labelText={"Email: "}
                    inputPlaceholder={"example@email.com"}
                />
                <Input
                    inputType={"date"}
                    inputName={"date"}
                    labelText={"Date of Birth: "}
                />
                <Button text={"Register User"} buttonClass={"register-btn"} />
            </form>
        </section>
    );
}