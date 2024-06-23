
export function DataBinding() {
    var user = "shekhar";
    return (
        <div className="container-fluid">
        <dl>
            <dt>User Name</dt>
            <dd><input type="text" value={user}/></dd>
        </dl>
            <p>Hello!{user}</p>
        </div>
    )
}