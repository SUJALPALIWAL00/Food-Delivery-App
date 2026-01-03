import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem, setcartItem]= useState({})

    const addToCart = (id) =>{
        if(!cartItem[id]){
            setcartItem((prev)=>({...prev, [id]:1}))
        }
        else{
            setcartItem((prev)=>({...prev, [id]:prev[id]+1}))            
        }
    }

    const removeFromCart = (id) => {
        setcartItem((prev)=>({...prev, [id]:prev[id]-1}))
    }

    // Fx to calculate total amount in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        for (const key in cartItem){
            if (cartItem[key] > 0) ;
            let itemInfo = food_list.find((product)=> product._id === Number(key))
            totalAmount += cartItem[key] * itemInfo.price;

        } 
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider