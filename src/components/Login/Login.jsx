import './Login.css'
export function Login() {
    return (
        <div>
            <header className='mt-3'>
                <button data-bs-target='#navbar' data-bs-toggle='offcanvas' className='btn btn-dark bi bi-justify'></button>
                <div className='offcanvas offcanvas-start ' id='navbar' tabIndex='-1'>
                    <div className='offcanvas-header'>
                        <h3>Navbar</h3>
                        <button className='btn btn-close' data-bs-dismiss='offcanvas'></button>
                    </div>
                    <div className="offcanvas-body bg-dark text-white">
                        your menus.....
                    </div>
                </div>
            </header>

            <div className='d-flex justify-content-center align-item-center p-4'>
                <div className='border border-2 p-2'>
                    <form className='alert alert-dark alert-dismissible'>
                        <h3 className='bi bi-person-fill'>User Login</h3>
                        <button className='btn btn-close' data-bs-dismiss='alert'></button>
                        <dl>
                            <dt className='form-label'>User Name</dt>
                            <dd> <input type="text" className="form-control" /> </dd>
                            <dt className="form-label">Password</dt>
                            <dd> <input type="password" className="form-control" /> </dd>
                        </dl>
                        <button className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}