export function ReactGrid(props) {
    return (
        <table className={`table table-hover caption-top ${props.theme}`}>
            <caption>{props.caption}</caption>
            <thead>
                {
                    props.fields.map(field=><th key={field}>{field}</th>)
                }
            </thead>
            <tbody>
                {
                    props.data.map(item=>
                        <tr key={item}>
                            {
                                Object.keys(item).map(key=><td key={key}>{item[key]}</td>)
                            }
                        </tr>
                        )
                }
            </tbody>
        </table>
    )
}