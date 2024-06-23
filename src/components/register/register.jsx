

export function Register(){
    return(
        <div>
            <form>
                <h2>User Registration</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text"/></dd>
                    <dt>Email</dt>
                    <dd><input type="email"/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="mobile"/></dd>
                    <button>Register</button>
                </dl>
            </form>
        </div>
    )
}