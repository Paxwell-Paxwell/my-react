import React from "react";
import Sty from "../css/PopupCart.module.css";

export default function Popupcart({allproduct}) {
  
  const [filterProduct, setFilterProduct] = React.useState([]);

  React.useEffect(() => {
    let localItem = localStorage.getItem("items");
    
    if(localItem !== null){
      localItem = JSON.parse(localItem);
      const temp = allproduct.filter((product) => {
      return localItem.findIndex((item) => product.id === item.id) > -1;
    });
    setFilterProduct(temp);
    }
    else {
      setFilterProduct([]);
    }
  }, []);
  
  return (
    <>
      <div
        className={`card ${Sty.popup_cart}` }
        style={{ width: "18rem", borderRadius: "0px 0px 5px 5px" }}
      >
        <div className="card-header text-start">Product</div>
        <ul className="list-group list-group-flush">
          {filterProduct?.map((item) => (
            <li key={item.id} className="list-group-item">
            <div className="d-flex justify-content-around">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/1200px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"
                style={{ width: "30px", borderRadius: "2px" }}
                className=""
                alt="..."
              />
              <span  style={{maxWidth:"100px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{item?.title}</span>
              <span style={{width:"25%"}} >{`$ ${item?.price}`}</span>
            </div>
          </li>
          ))}
          
        </ul>
      </div>
    </>
  );
}
