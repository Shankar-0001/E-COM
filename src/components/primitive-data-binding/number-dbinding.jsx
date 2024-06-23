export function NDBinding(){
    var Price=460000.00;
    return(
        <>
        <h1>Data Type</h1>
        <p>
                Price : {Price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })}
        </p>
        </>
    )
}