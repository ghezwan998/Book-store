import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/order.controllers.js";
import express from "express";
import isAdmin from "../middlewares/isAdmin.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, createOrder);
router.get("/", auth, isAdmin, getOrders);
router.get("/:id", auth, getOrderById);
router.put("/:id", auth, isAdmin, updateOrderStatus);
router.delete("/:id", auth, deleteOrder);

export default router;
