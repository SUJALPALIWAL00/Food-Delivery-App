import express from "express"
import { addToCart, removeFromCart, getcart } from "../controllers/cartController.js"


const cartRouter = express.Router()

cartRouter.post("/add", addToCart)
cartRouter.post("/remove", removeFromCart)
cartRouter.post("/get", getcart)


export default cartRouter