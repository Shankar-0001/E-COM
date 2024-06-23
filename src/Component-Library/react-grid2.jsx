

export function ReactGridB(props) {

    if (props.layout === 'grid') {
        return (
            <>
                <table className="table table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Privies</th>
                    </thead>
                    <tbody>
                        <td>iPhone15 Pro</td>
                        <td>59000.99</td>
                        <td><img src="ip1.jpg" width="300" height="400" /></td>
                    </tbody>
                </table>
            </>
        )
    }
    else {
        return (
            <>
                <div className="card m-2 p-2" style={{ width: '300px' }}>
                    <img src="ip1.jpg" className="card-img-top" height="400" />
                    <div className="card-header">
                        <h3>iPhone15</h3>
                    </div>
                    <div className="card-body">
                        Price:59000.99
                    </div>
                </div>
            </>
        )
    }
}
