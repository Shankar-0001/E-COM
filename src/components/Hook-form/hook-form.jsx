import { useForm } from "react-hook-form";
import { Navbar } from "../../Component-Library/navbar";

export function HookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const submit = (values) => {
        alert(JSON.stringify(values));
    }

    return (
        <div className="container-fluid">

            <Navbar BrandName="Shopper" MenuItems={["Home","Shop","Blog","Pages","Docs"]} ThemeName="bg-dark text-white"/>

            <Navbar BrandName="Shopper" MenuItems={["Home", "Shop", "Blog", "pages", "Docs"]} ThemeName="bg-warning "/>
            
            
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit(submit)} className="mt-2 ">
                <dl>
                    <dt className="form-label">User Name</dt>
                    <dd><input type="text" className="form-control" {...register("UserName", { required: true, minLength: 4, pattern: /[A-Z]{4,15}/ })} name="UserName" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type === "required") ? <span>User Name Required</span> : <span></span> &&
                                (errors.UserName?.type === "minLength") ? <span>Name too Short..</span> : <span></span> &&
                                    (errors.UserName?.type === "pattern") ? <span>Name in Block Letters</span> : <sapn></sapn>
                        }
                    </dd>
                </dl>
            </form>

            <button className="btn btn-primary w-100">Submit</button>

        </div>
    )
}