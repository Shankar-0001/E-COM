import bootstrap from 'bootstrap';
export function ArrayDatabinding() {
    var categories = ["All", "Electronics", "Footwear"];
    return (
        <>
            <h2>Data Type</h2>
            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
            <select>
                {
                    categories.map(category => <option key={category} value="category">{category}</option>)
                }
            </select>
            <br />
            <>
                <ul>
                    {
                        categories.map(category => <li key={category}><input type="checkbox" /><label>{category}</label></li>)
                    }
                </ul>
            </>
            <br />
            <>
                <ul>
                    {
                        categories.map(category => <li key={category}><input type="Radio"/><label>{category}</label></li>)
                    }
                </ul>
            </>
            <br/>
            <nav className="d-flex bg-dark text-white p-2 justify-content-between">
                {
                    categories.map(category => <a href="#" key={category} className='me-5 ms-5 d-flex btn btn-danger'>{category}</a> )
                }
            </nav>
        </>

    )
}