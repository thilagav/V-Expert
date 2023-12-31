import express from "express";
import cors from "cors";
import { MailRouter } from "./routes/mailer.mjs";
import { BookingRouter } from "./routes/bookingRouter.mjs";
import { UserRouter } from "./routes/userRouter.mjs";
import { RatingRouter } from "./routes/ratingRouter.mjs";
import { BackUpRouter } from "./routes/backUpRouter.mjs";
import { healthCheck } from "./utils/healthCheck.mjs";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/bookings", MailRouter);
app.use("/api/book", BookingRouter);
app.use("/api/user", UserRouter);
app.use("/api/rating", RatingRouter);
app.use("/api/backup", BackUpRouter);

app.get("/api", healthCheck);

export { app };
