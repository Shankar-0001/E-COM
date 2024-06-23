import { useState } from "react";
import { useFormik } from "formik";
export function FormDemo() {

    const formik = useFormik({
        initialValues:{
            UserId:'',
            Password:'',
            Age:0,
            Gender:'',
            City:''
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        }
    })
    
    return (
        <div className="d-flex justify-content-center align-items-center mt-2">
            <form className="border border-2 p-4" onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>
                    <dt>Gender</dt>
                    <dd>
                        <input type="radio" name="gender" value="male" onChange={formik.handleChange}/><label>Male</label>
                        <input type="radio" name="gender" value="female" onChange={formik.handleChange}/><label>Female</label>
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="City">
                            <option>Your City</option>
                            <option>Hyderabad</option>
                            <option>Jharkhand</option>
                            <option>Bangalore</option>
                            <option>Goa</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-success">Register</button>
            </form>
        </div>
    )
}