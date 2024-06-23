export function FormBinding() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', }}>
            <form>
                <div className="form-switch">
                    <input type="checkbox" className="form-check-input"/><label className="form-check-label">Dark Mode</label>
                </div>
                <h2 className="bi bi-person-fill">User Login</h2>
                <dl>
                    <dd>User Name</dd>
                    <dt><input type="text" className="form-control" /></dt>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-dark w-100">Login</button>
            </form>
        </div>
    )
}