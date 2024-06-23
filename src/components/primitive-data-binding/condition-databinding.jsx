export function ConditionDB(){
    var price= 4769;
    return(
        <>
        <h2>Data Type</h2>
        {
                (isNaN(price)) ? <span>price is not a number</span> : <span>{price}</span>
        }
        </>
    )
}