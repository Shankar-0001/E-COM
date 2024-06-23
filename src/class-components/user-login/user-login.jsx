import React from "react"


export class UserLogin extends React.Component
{

    constructor(){
        super();
        this.state ={
            title:"Data Binding",
            categories:["All", "Electronics", "Footwear", "Fashion"],
            theme:'bg-dark text-white p-2'
        }
    }
    
    render(){
        return(
            <div className={`container-fluid ${this.state.theme}`}>
            <h2>{this.state.title}</h2>
            <ol>
                {
                    this.state.categories.map(category=><li key={category}>{category}</li>)
                }
            </ol>
            </div>
        )
    }
}