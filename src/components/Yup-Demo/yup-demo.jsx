import { useState } from "react";
import { useFormik } from "formik";
import *as yup from "yup";

export function DemoYup() {
    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: '',
            Age: 0,
            Gender: '',
            City: ''
        },
        validationSchema: yup.object({
            UserId: yup.string().required("User Id Required").min(4, "Name should be 4 character").max(15, "Name should be 15 character"),
            Password: yup.string().required("Password Required").matches(/(?=.*[A-Z])\w{4,15}/, "Password 4 to 15 atleast one uppercase letter"),
            Age: yup.number().required("Age Required").min(15,"Min age is 15").max(25,"max age is 25"),
            city:yup.string().required("Please Select your city"),
            
        }),

        onSubmit:(values) => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container d-flex justify-content-center align-items-center mt-4">
            <form className="border border-2 p-4" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-3">SignUp !</h2>
                    <dl>
                        <dt>User Id</dt>
                        <dd><input type="text" name="UserId" onChange={formik.handleChange} /></dd>
                        <dd className="text-danger">{formik.errors.UserId}</dd>
                        <dt>Password</dt>
                        <dd><input type="password" name="Password" onChange={formik.handleChange} /></dd>
                        <dd className="text-danger">{formik.errors.Password}</dd>
                        <dt>Age</dt>
                        <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>
                        <dd className="text-danger">{formik.errors.Age}</dd>
                        <dt>Gender</dt>
                        <input type="radio" name="Gender" value="male" onChange={formik.handleChange} /><label>Male</label>
                        <input type="radio" name="Gender" value="female" onChange={formik.handleChange} /><label>Female</label>
                        <dt>City</dt>
                        <dd>
                            <select onChange={formik.handleChange} name="City">
                                <option value="-1">Choose your city</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Goa">Goa</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyderabad">Hyderabad</option>
                            </select>
                        </dd>
                        <dd className="text-danger">{formik.errors.City}</dd>
                    </dl>
                <button className="btn btn-info">Register</button>
            </form>
        </div>
    )
}