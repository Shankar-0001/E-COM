import './Disable-Button.css';  
export function EventDemo() {
    function SubmitClicked(e){
        alert('Hello you enterd an alert message! what now?');
        e.preventDefault();
    }
    return (
        <div className=" m-2 p-4 d-flex align-items-center justify-content-center">
            <form className="w-50 border border-2 p-5 rounded d-flex align-items-center justify-content-center" id="form-body" onSubmit={SubmitClicked}>
                User Name:<input type="text" name="username" className="ms-2 me-2" /><button type="submit">Submit</button>
            </form>
        </div>
    )
}