import React from "react";
import ProductCard from "../component/ProductCard";
import Loader from "../component/Loader";

import Sty from "../css/Shop.module.css";
import { Link} from "react-router-dom";
import Popupcart from "../component/Popupcart";
import getAllProduct  from "../service/product";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice";

const initcatagory = [
    {name: "men's clothing", checked: false, id: 0},
    {name: "jewelery", checked: false, id: 1},
    {name: "electronics", checked: false, id: 2},
    {name: "women's clothing", checked: false, id: 3}
];
export default function Shop() {
    const cou = useSelector((state) => state.cart.countCart);
    const dispatch = useDispatch();
    const [AllProduct, setAllProduct] = React.useState([]);
    const [productList, setProductList] = React.useState([]);
    //const [cou, setCou] = React.useState(0);
    const [search, setSearch] = React.useState("");
    const [catagory, setCatagory] = React.useState(initcatagory);
    const [loading, setLoading] = React.useState(false);
    const [holdicon, setHoldIcon] = React.useState(false);
    const [searchHistory, setSearchHistory] = React.useState([]);
    const [showHistory, setShowHistory] = React.useState(false);
    const [mouseOverHistory, setMouseOverHistory] = React.useState(false);

    // similar to componentDidMount and componentDidUpdate:
    // get data from api
    React.useEffect(() => {
        getAllProduct()
        .then((data) => {
                console.log(data);    
                setProductList(data);
                setAllProduct(data);
            }
        ) 
    }, []); // [] means only run once
    React.useEffect(() => {
        const localHistory = localStorage.getItem("search-history");
        if (localHistory !== null) {
            setSearchHistory(JSON.parse(localHistory));
        }
    }, []);
   
    function showLoading() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }
    function seachProduct(event) {
        showLoading();
        event.preventDefault(); // prevent reload page
        if(search !== "") {
            let searchList = AllProduct.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase());
            });
            console.log(searchList);
            if(catagory.find((item) => item.checked === true)){
                showFilter(searchList)
            }
            else {
                setProductList(searchList);
            }

            // save search history
            const localHistory = localStorage.getItem("search-history");
            if (localHistory === null) {
                localStorage.setItem("search-history", JSON.stringify([search]));
            }
            else {
                let tmp = JSON.parse(localHistory);
                if(tmp.indexOf(search) === -1) {
                    if(tmp.length < 10) {
                        tmp.unshift(search);
                    }
                    else {
                        tmp.unshift(search);
                        tmp.pop();
                    }
                    localStorage.setItem("search-history", JSON.stringify(tmp));
                }
            }
        }
        else {
            if(catagory.find((item) => item.checked === true)){
                showFilter(AllProduct)
            }
            else {
                setProductList(AllProduct);;
            }
        }

    }
    function filterCategory(event){
        // console.log(event.target.value, event.target.checked);
        showLoading();
        const tmp = [...catagory];
        if(event.target.checked) {
            tmp[event.target.value].checked = true;
        }
        else if(!event.target.checked){
            tmp[event.target.value].checked = false;
        }
        setCatagory(tmp);
        showFilter(AllProduct);
    }
    function showFilter(items){
        if(catagory.find((item) => item.checked === true)) {
            /*let filled =[];
            catagory.forEach((cat) => {
                if(cat.checked) {
                    let tmp = items.filter((item) => {
                        return item.category === cat.name;
                    });
                    filled = [...filled,...tmp];
                }
            })*/

            const filled = items.filter((item) => {
                return catagory.find((cat) => {
                    return cat.checked && item.category === cat.name;
                })
            })

            setProductList(filled);
        }
        else{
            setProductList(AllProduct);
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-end m-3">
                        <div className="position-relative">
                            <div className={Sty.num_card}>{cou}</div>
                            <Link to="/shop/cart" className="nav-link">
                                <i style={{fontSize: "2rem",cursor:"pointer"}} onMouseEnter={()=>setHoldIcon(true)} onMouseLeave={()=>setHoldIcon(false)} className="bi bi-cart-plus"></i>
                            </Link>
                            <div  className="z-1" style={{width:"18rem",position:"absolute",top:"50px",right:"0px"}} > 
                                {holdicon && <Popupcart allproduct={AllProduct} proInCart ={cou}/>}
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className={`row mb-5 py-5 ${Sty.search_bg}`}>
                    <div className="col-12 text-white text-center">
                        <h1>Search product</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis.</p>
                        <div className="row">
                            <div className="offset-3 col-6 position-relative">
                                <form className={`${Sty.search_form}`} action="#search" onSubmit={(event) => {seachProduct(event)}}>
                                    <i className={`${Sty.search_icon} bi bi-search`} onClick={seachProduct}></i>
                                    <input value={search} type="text" className="form-control" onFocus={()=>setShowHistory(true)} 
                                    onBlur={()=>{
                                        if (!mouseOverHistory) {
                                            setShowHistory(false);
                                          }
                                    }} 
                                         onChange={(e)=>(setSearch(e.target.value))}/>
                                    <div className={`${Sty.search_history}`} 
                                     onMouseEnter={() => setMouseOverHistory(true)}
                                     onMouseLeave={() => {
                                       setMouseOverHistory(false);
                                       
                                     }}
                                     >
                                        {showHistory && searchHistory.map((item, index) => {
                                            return  (
                                                <div className={`${Sty.child_history}`} key={index} onClick={()=>{
                                                    setSearch(item);
                                                    setShowHistory(false);
                                                } }>
                                                    {item}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </form>
                                <div className="row">

                                    <div className="col-12 m-2">
                                        {/* <button className="btn  btn-light me-2">men's clothing</button>
                                        <button className="btn  btn-light me-2">jewelery</button>
                                        <button className="btn  btn-light me-2">electronics</button>
                                        <button className="btn  btn-light me-2">women's clothing</button> */}
                                        <input type="checkbox"   id="men's clothing"  onChange={filterCategory} value={0}/>
                                        <label htmlFor="men's clothing" >men's clothing</label>
                                        <input type="checkbox" id="jewelery" onChange={filterCategory} value={1}/>
                                        <label htmlFor="jewelery">jewelery</label>
                                        <input type="checkbox" id="electronics" onChange={filterCategory} value={2}/>
                                        <label htmlFor="electronics">electronics</label>
                                        <input type="checkbox" id="women's clothing" onChange={filterCategory} value={3} />
                                        <label htmlFor="women's clothing">women's clothing</label>
                                    </div> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {loading && 
                    (
                        <div className="row">
                            <div className="col-12 text-center">
                                <Loader/>
                            </div>
                        </div>
                    )
                }
                <div className="row">
                        {!loading &&productList.map((item) => 
                            (
                                <div key={item.id} className="col-3 mb-3">
                                    <ProductCard items={item} onAdd={(id,qty)=>{dispatch(addCart({id,qty}))}}/>
                                </div>
                            )
                        )} 
                </div>
            </div>
        </>
    );
}
