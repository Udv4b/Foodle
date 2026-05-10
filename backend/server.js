import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));

app.use('/api/user', userRouter);

app.use("/api/cart", cartRouter);

app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
    res.send("API is working");
});

/*const processPayment = (req, res) => {
    res.status(200).json({success:true})
}

app.route("/payment/process").post(processPayment)

instance.orders.all().then(console.log).catch(console.error);*/

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

