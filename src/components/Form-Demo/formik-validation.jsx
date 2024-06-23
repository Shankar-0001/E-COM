import { useState } from "react";
import { useFormik } from "formik";

export function FormicValidation() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center ">
            <form className="m-4 border border-3 p-4">
                <h2>User Register</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserId" /></dd>
                    <dt>Password</dt>
                    <dd><input type="Password" name="Password" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" /></dd>
                    <dt>Gender</dt>
                    <dd>
                        Male: <input className="ms-2" type="Radio" name="Gender" value="Male" />
                        Female: <input className="ms-2" type="Radio" name="Gender" value="Female" />
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select>
                            <option>Select your City</option>
                            <option>Hyderabad</option>
                            <option>Hazaribagh</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}