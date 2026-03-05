import express from "express";
import {login} from '../controller/UserController.js'

const route=express.Router()
route.get("/user",login)
export default route