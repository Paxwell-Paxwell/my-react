import React, { useEffect } from 'react'
import sty from '../css/Cart.module.css'
import CardCart from '../component/CardCart'
import ProductCard from '../component/ProductCard'
import Popupcart from '../component/Popupcart'
import getAllProduct from '../service/product'
export default function Cart() {
  const [AllProduct, setAllProduct] = React.useState([]);
  const [productList, setProductList] = React.useState([]);
  
  React.useEffect(() => {
      getAllProduct().then((data) => {
          setAllProduct(data);
          let localItem = localStorage.getItem("items")
          if(localItem !== null) {
              localItem = JSON.parse(localItem);
              let newItem = data.map((product) => {
                const foundIndex = localItem.findIndex((cart) => cart.id === product.id)
                if(foundIndex > -1) {
                    product.qty = localItem[foundIndex].qty;
                    return product;
                }
              });

              newItem = newItem.filter((item) => item !== undefined);
              setProductList(newItem);
          }
      })
        
  },[]);
  function delCard(id) {
      const foundIndex = productList?.findIndex((item) => item.id === id);
      if(foundIndex > -1) {
          let newproductList = [...productList];
          newproductList.splice(foundIndex,1);
          setProductList(newproductList);
          let localItem = localStorage.getItem("items");
          if(localItem !== null) {
              localItem = JSON.parse(localItem);
              localItem.splice(foundIndex,1);
              localStorage.setItem("items", JSON.stringify(localItem));
          }
          localItem = localStorage.getItem("countCart");
          if(localItem !== null) {
              localItem = Number(localItem);
              localItem -= 1;
              localStorage.setItem("countCart", localItem);
          }

      }
  }
  function changeQty(id,qty) {
      const foundIndex = productList.findIndex((item) => item.id === id);
      if(foundIndex > -1) {
          let newproductList = [...productList];
          newproductList[foundIndex].qty = qty;
          setProductList(newproductList);
          let localItem = localStorage.getItem("items");
          if(localItem !== null) {
              localItem = JSON.parse(localItem);
              localItem[foundIndex].qty = qty;
              localStorage.setItem("items", JSON.stringify(localItem));
          }
      }
    }

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
              return <CardCart key={item.id} product={item} onChangeqty={(id,qty)=>changeQty(id,qty)} onDelete={(id)=>delCard(id)}/>
          })}
          
      </div>
    </>
  )
}
