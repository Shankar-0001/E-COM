import { ReactGrid } from "../../Component-Library/react-grid";

export function CustomDemo(){
    return(
        <div className="container-fluid">
            <h2>Custome Component</h2>
            <ReactGrid caption="Products - Update 22-02-2024" fields={["Name","Price"]} theme="table-primary" data={[{Name:"TV", Price:5678.67}, {Name:"Mobiles", Price:12000.33}]}/>

            <hr size="4" color="red" noshade/> 
            <ReactGrid caption="Emplyess Data" fields={["First Name", "LastName", "Designation", "Salary"]} theme="table-secondary" data={[{ FirstName: "Raj", LastName: "Shekhar", Designation: "FrontEnd Developer", Salary: 50000 }, { FirstName: "Raj", LastName: "Shekhar", Designation: "FrontEnd Developer", Salary: 50000 }, { FirstName: "Raj", LastName: "Shekhar", Designation: "FrontEnd Developer", Salary: 50000 }]}/>

        </div>
    )
}