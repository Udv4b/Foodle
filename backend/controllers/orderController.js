import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import crypto from "crypto";
import razorpay from "../config/razorpay.js";

// Placing order using Razorpay
const placeOrder = async (req, res) => {
    try {
        // 1. Save the order in your Database
        const newOrder = new orderModel({
            userId: req.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save();
        
        // Clear user cart
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // 2. Prepare Razorpay Options
        // Razorpay expects amount in the smallest currency unit (paise for INR)
        const options = {
            amount: Math.round(req.body.amount * 100), // Amount in paise
            currency: "INR",
            receipt: newOrder._id.toString(),
        };

        // 3. Create Razorpay Order
        const order = await razorpay.orders.create(options);

        // 4. Send the order details to frontend
        res.json({ success: true, order });

    } catch (error) {

   console.log("RAZORPAY ERROR:", error);

   res.json({
      success: false,
      message: error.message,
      error: error
   });
}
}

// Verify Razorpay Payment
const verifyOrder = async (req, res) => {
    try {

        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            orderId
        } = req.body;

        // Create generated signature
        const generated_signature = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        // Compare signatures
        if (generated_signature === razorpay_signature) {

            // Update payment status
            await orderModel.findByIdAndUpdate(orderId, {
                payment: true
            });

            await userModel.findByIdAndUpdate(req.userId, { cartData: {} });

            res.json({
                success: true,
                message: "Payment Successful"
            });

        } else {

            res.json({
                success: false,
                message: "Payment Failed"
            });

        }

    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });
    }
}

export { placeOrder, verifyOrder }