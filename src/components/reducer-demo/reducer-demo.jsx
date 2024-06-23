import { useReducer } from "react";

let initialState = {CartCount : 0}

function reducer(state, action){
    switch(action.type){
        case "add":
            return{CartCount: state.CartCount +1};
            case "remove":
            return{CartCount: state.CartCount -1};
    }
}

export function ReducerDemo() {

const[state, dispatch]=useReducer(reducer, initialState);
function handleAddClick(){
    dispatch({type:'add'});
}

    function handleRemoveClick(){
        dispatch({type:'remove'});
    }
    
    return (
        <div className="container-fluid">
            <h3>Shopping Cart</h3>
            <button onClick={handleAddClick} className="btn btn-primary bi bi-cart4 me-4 position-relative "><span className="bg-danger badge rounded-circle position-absolute"> {state.CartCount}</span></button>
            <button onClick={handleRemoveClick} className="btn btn-danger bi bi-trash-fill"></button>
        </div>
    )
}