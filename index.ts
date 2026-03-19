import express from "express";
import videoRoutes from "./routes/videos";

const app = express();

app.use(express.json());

// ✅ mount routes
app.use("/", videoRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});