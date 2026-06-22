import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import showRouter from "./routes/showRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { cleanupExpiredBookings } from "./controllers/bookingController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

await connectDB();

// Periodically clean up unpaid bookings older than 10 minutes (run every 60 seconds)
setInterval(cleanupExpiredBookings, 60 * 1000);

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://bookmyshowclone.vercel.app"
  ],
  credentials: true
}));


app.use(express.json());

app.use(clerkMiddleware());

// API Routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/show", showRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () =>
    console.log(`Server is running at http://localhost:${port}`)
  );
}

export default app;