import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.json({
    success: true,
  });
});


export default app;