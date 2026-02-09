import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [token, setToken] = useState("")
    const [showDropDown, setShowDropDown] = useState(false)
    const [cartItem, setcartItem] = useState({})
    const backendurl = "http://localhost:4000"
    const [food_list, setFoodList] = useState([])

    const addToCart = (id) => {
        if (!cartItem[id]) {
            setcartItem((prev) => ({ ...prev, [id]: 1 }))
        }
        else {
            setcartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
        }
    }

    const removeFromCart = (id) => {
        setcartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }

    // Fx for getting food data for food cards from the backend
    const fetchFoodItem = async () => {
        const respone = await axios.get(backendurl + "/api/food/list")
        setFoodList(respone.data.data)
    }

    // To remain loggedin when page getting reloaded
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
        async function loadData() {
            await fetchFoodItem()
        }
        loadData()
    }, [])

    // Fx to calculate total amount in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const key in cartItem) {
            if (cartItem[key] > 0) {
                let itemInfo = food_list.find((product) => product._id === key)
                totalAmount += cartItem[key] * itemInfo.price;
            }

        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        backendurl,
        showDropDown,
        setShowDropDown
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider