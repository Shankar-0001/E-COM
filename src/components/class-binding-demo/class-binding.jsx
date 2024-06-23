import { useState } from "react";
import "./class-binding.css";

export function ClassBinding() {

    const [nameError, setNameError] = useState('invalid-style');
    const[required, setRequired] = useState('d-block');

    function handleNameChange(e) {
        if (e.target.value === "") {
            setNameError('invalid-style');
            setRequired('d-block');
        }
        else {
            setNameError('valid-style');
            setRequired('d-none');
        }
    }

    return (
        <div>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" className={nameError} onChange={handleNameChange} /></dd>
                <dd className={required}>Name Required</dd>
            </dl>

        </div>
    )
}