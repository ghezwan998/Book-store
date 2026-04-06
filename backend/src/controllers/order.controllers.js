import Order from "../models/order.js";
import Book from "../models/book.js";

const createOrder = async (req, res) => {
  const { items, address, phone } = req.body;
  const userId = req.user.id; // from auth middleware

  try {
    if (!items || items.length === 0) {
      return res.status(400).json({ error: "No items provided" });
    }

    // Get all books from DB
    const bookIds = items.map(item => item.bookId);
    const books = await Book.find({ _id: { $in: bookIds } });

    let orderItems = [];
    let totalPrice = 0;

    for (let item of items) {
      const book = books.find(
        b => b._id.toString() === item.bookId
      );

      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }

      // ✅ Check stock
      if (book.stock < item.quantity) {
        return res.status(400).json({
          error: `Not enough stock for ${book.title}`
        });
      }

      // ✅ Add to order items
      orderItems.push({
        book: book._id,
        quantity: item.quantity,
        price: book.price
      });

      // ✅ Calculate total
      totalPrice += book.price * item.quantity;
    }

    // ✅ Create order
    const order = new Order({
      userId,
      items: orderItems,
      totalPrice,
      address,
      phone
    });

    await order.save();

    // ✅ Reduce stock AFTER order created
    for (let item of items) {
      await Book.updateOne(
        { _id: item.bookId },
        { $inc: { stock: -item.quantity } }
      );
    }

    res.status(201).json({
      message: "Order created successfully",
      order
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("userId");
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id).populate("bookId").populate("userId");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        order.status = status;
        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createOrder, getOrders, getOrderById, updateOrderStatus, deleteOrder };