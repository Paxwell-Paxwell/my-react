import React from 'react'
import Sty from '../css/ProductCard.module.css'


export default function ProductCard({items,onAdd}) {
  const [count, setCount] = React.useState(1);
  const add = (op) => {
    if(op === "+") {
        setCount(count + 1);
    }
    else {
        if(count > 0) {
            setCount(count - 1);
        }
    }
  }
  return (
    <>
        <div className="card h-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/1200px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG" className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{items?.title}</h5>
                        <p className="card-text">{items?.price}</p>
                        <h6> {items?.category}</h6>
                        <h6>Rating: {items?.rating?.count}</h6>
                    </div>
                    <div className="text-center">
                        <div style={{display:"inline" }} className={Sty.add}>
                            <button onClick={()=>add('-')}>-</button>
                            <span style={{width:"20px",display:"inline-block"}}>{count}</span>
                            <button onClick={()=>add('+')}>+</button>
                        </div>
                        <button type="button" className="btn btn-primary ms-3" onClick={() => {onAdd(items?.id,count)}}>Add to cart</button>
                    </div>
                </div>

        </div>
    </>
  )
}
