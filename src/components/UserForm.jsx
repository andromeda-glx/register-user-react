import "../assets/styles/UserForm.css"
import Input from "./Input";

export default function UserForm() {
    return (
        <section className="user-form-c">
            <form className="user-form">
                <Input
                    inputType={"text"}
                    inputName={"name"}
                    labelText={"Username: "}
                />
                <Input 
                    inputType={"email"}
                    inputName={"email"}
                    labelText={"Email: "}
                />
                <Input 
                    inputType={"date"}
                    inputName={"date"}
                    labelText={"Date of Birth: "}
                />
                <button className="register-btn">
                    Register User
                </button>
            </form>
        </section>
    );
}