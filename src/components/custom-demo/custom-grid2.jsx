import { useState } from "react";
import { ReactGridB } from "../../Component-Library/react-grid2";

export function CustomDemo2() {

    const [layout, setLayout] = useState('grid');

    function handleLayoutChange(e) {
        setLayout(e.target.value);
    }

    return (

        <div className="container-fluid">
            <div className="w-25">
                <h3>Conditinal Render</h3>
                <select onChange={handleLayoutChange} className="form-select ">
                    <option>Select Layout</option>
                    <option value="grid">Grid</option>
                    <option value="card">Card</option>
                </select>
            </div>
            <ReactGridB layout={layout} />
        </div>
    )
}