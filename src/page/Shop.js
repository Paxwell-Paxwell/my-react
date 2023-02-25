import React from "react";
import axios from "axios";
import ProductCard from "../component/ProductCard";
import Sty from "../css/Shop.module.css";
export default function Shop() {
    const [productList, setProductList] = React.useState([]);
    const [cou, setCou] = React.useState(0);
    // similar to componentDidMount and componentDidUpdate:
    React.useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (response) {
                // handle success
                console.log(response.data);
                setProductList(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-end m-3">
                        <div className="position-relative">
                            <div className={Sty.num_card}>{cou}</div>
                            <i style={{fontSize: "2rem"}} className="bi bi-cart-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                        {productList.map((item) => 
                            (
                                <div key={item.id} className="col-3 mb-3">
                                    <ProductCard items={item} onAdd= {()=>{setCou(cou+1)}}/>
                                </div>
                            )
                        )} 
                </div>
            </div>
        </>
    );
}
