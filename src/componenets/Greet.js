import React from 'react'
function Greet(props){
    return <div>
        <h1>Hello {props.name}</h1>
    <p>{props.children}</p>
    </div>
}
export default Greet