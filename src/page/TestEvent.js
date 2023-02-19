
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



function addClick() {
    const countElem = document.getElementById("p1");
    let value = parseInt(countElem.innerText);
    value++;
    countElem.innerText = value;
    document.getElementById("p2").innerText = value;
    document.getElementById("p3").innerText = value;
    document.getElementById("p4").innerText = value;
}



export default function TestEvent() {
    
    const [count, setCount] = React.useState(0);
    
    function del_addReactClick(opara) {
        if(opara === "+"){
            setCount(count+1)}
        else{
            setCount(count-1)
        }
    }

    

    return (
        <div>
            <div className="container">
                <p id="p1">{count}</p>
                <p id="p2">{count}</p>
                <p id="p3">{count}</p>
                <p id="p4">{count}</p>
                <button className='btn btn-primary me-3' onClick={()=>del_addReactClick("+")}>+</button>
                <button className='btn btn-primary' onClick={()=>del_addReactClick("-")}>-</button>
            </div>
        </div>
    )
}




