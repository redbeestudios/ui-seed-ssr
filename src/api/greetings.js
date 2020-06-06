import express from "express";

const router = express.Router();

router.get("/greetings/me", (req, res) => {
  res.status(200).json({
    id: 3,
    name: "Michael",
  });
});

export default router;
