import React, { useEffect } from 'react'
import sty from '../css/Cart.module.css'
import CardCart from '../component/CardCart'
import ProductCard from '../component/ProductCard'
import Popupcart from '../component/Popupcart'
import getAllProduct from '../service/product'
import { useSelector, useDispatch } from 'react-redux'
import {  changeQty,removeCart} from '../store/cartSlice'

export default function Cart() {
    const [AllProduct, setAllProduct] = React.useState([]);
    const [productList, setProductList] = React.useState([]);
    const cartdata = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

  React.useEffect(() => {
    getAllProduct().then((data) => {
        setAllProduct(data);
        let localItem = cartdata; // []
        if(localItem.length > 0) {
            let newItem = data.map((product) => {
                const foundIndex = localItem.findIndex((cart) => cart.id === product.id)
                if(foundIndex > -1) {
                    product.qty = localItem[foundIndex].qty;
                    return product;
                }
                return undefined;
            });

            newItem = newItem.filter((item) => item !== undefined);
            setProductList(newItem);
        }
        else {
            setProductList([]);
        }
    })
        
  },[cartdata]);


  return (
    <>
      <div className="container-fluid mb-2">
        <div className={`row ${sty.bgCart} align-items-center`}>
            <div className="col-12 text-center text-white ">
                <h1 className=""><span className='me-2'>Cart</span><i className="bi bi-cart3"></i></h1>
            </div>
        </div>
      </div>
      <div className="container">
          {productList?.map((item) => {
              return <CardCart key={item.id} product={item} onChangeqty={(id,qty)=>dispatch(changeQty({id,qty})) } onDelete={(id)=>dispatch(removeCart(id))}/>
          })}
          {productList.length === 0 && 
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"75vh"}}>
              <h1 className="text-center">Cart is empty</h1>
            </div>}
          
          
      </div>
    </>
  )
}
