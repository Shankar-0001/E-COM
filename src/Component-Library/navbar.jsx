export function Navbar(props) {
    return (
        <nav className={`p-2 mt-2 d-flex justify-content-between border border-1 border-secondary ${props.ThemeName}`}>
            <div className="h3">{props.BrandName}</div>
            <div>
                {
                    props.MenuItems.map(item=><span className="me-4" key={item}>{item}</span>)
                }
            </div>
            <div>
                <span className="bi bi-search me-3"></span>
                <span className="bi bi-heart m3-3"></span>
                <span className="bi bi-person-fill me-3"></span>
                <span className="bi bi-cart3 me-3"></span>
            </div>
        </nav>
    )
}