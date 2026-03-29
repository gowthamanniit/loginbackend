import express from "express";
import {login,saveitem,getAllProducts} from '../controller/UserController.js'

const route=express.Router()
route.get("/user",login)
route.post("/products",saveitem)
route.get("/products",getAllProducts)

export default route