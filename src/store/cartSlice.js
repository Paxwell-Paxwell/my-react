import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[],
        countCart: localStorage.getItem('countCart')? Number(localStorage.getItem('countCart')):0,
        
    },
    reducers: {
        addCart: (state,action)=> { // action.payload = {id,qty}
            const {id,qty} = action.payload;
            const new_item = {
                id: id,
                qty: qty
            }
            const localItem  = state.items;
            if(localItem.length > 0) {
                const foundIndex = localItem.findIndex((item) => item.id === id);
                if(foundIndex > -1) {
                    localItem[foundIndex].qty += qty;
                }
                else {
                    localItem.push(new_item);
                }
                localStorage.setItem("items", JSON.stringify(localItem));
                state.items = localItem;
            }
            else {
                localStorage.setItem("items", JSON.stringify([new_item]));
                state.items.push(new_item)
            }
            
            localStorage.setItem("countCart", state.items.length);
            state.countCart = state.items.length;
        },
        removeCart: (state,action)=> {
            const foundIndex = state.items.findIndex((item) => item.id === action.payload);
            
            if(foundIndex > -1) {
                let localItem_Cart = state.items;
                localItem_Cart.splice(foundIndex,1);
                localStorage.setItem("items", JSON.stringify(localItem_Cart));
                //state.items = localItem_Cart;
                localStorage.setItem("countCart", state.items.length);
                state.countCart = state.items.length;
            }
            
        },
        changeQty: (state,action)=> {
            const {id,qty} = action.payload;
            const foundIndex = state.items.findIndex((item) => item.id === id);
            if(foundIndex > -1) {
                let localItem_Cart = state.items;
                localItem_Cart[foundIndex].qty = qty;
                if(qty === 0) {
                    localItem_Cart.splice(foundIndex,1);
                    localStorage.setItem("countCart", state.items.length);
                    state.countCart = state.items.length;
                }
                localStorage.setItem("items", JSON.stringify(localItem_Cart));
                state.items = localItem_Cart;
            }
        }
    },

});

export const {addCart,removeCart,changeQty} = cartSlice.actions;
export default cartSlice.reducer;