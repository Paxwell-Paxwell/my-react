import React from 'react'
import sty from '../css/Cart.module.css'
export default function CardCart({ product ,onChangeqty,onDelete }) {
    const [qty,setQty] = React.useState(1);
    React.useEffect(() => {
        setQty(product.qty);
    },[]);

    const { id,title,price} = product;
    function chageQty(type) {
        if(type === '+') {
            
            onChangeqty(id,qty+1);
            setQty(qty+1);
        }
        else {
            if(qty > 1) {
                onChangeqty(id,qty-1);
                setQty(qty-1);
            }
        }
    }
    return (
    <>
        <div style={{width:"100%"}} className={`d-flex justify-content-evenly align-items-center ${sty.bgcard}`}>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/1200px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG" style={{width:"200px"}} className='' alt="..." />
              </div>
              <div className='d-flex text-center'>
                <span style={{maxWidth:"150px",overflowWrap:"break-word"}}>{title}</span>
              </div>
              <div>
                <span>{price}</span>
              </div>
              <div className={`text-center ${sty.addbtn}`}>
                  <button onClick={()=>chageQty('-')}>-</button>
                  <span style={{width:"20px", display:"inline-block"}}>{qty}</span>
                  <button onClick={()=>chageQty('+')}>+</button>
              </div>
              <div>
                <i style={{fontSize:"1.5rem",cursor:"pointer"}} onClick={()=>onDelete(id)} className="bi bi-trash2"></i>
              </div>
          </div>
    </>
    )
}
