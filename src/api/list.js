import express from "express";

const router = express.Router();

router.get("/list", (req, res) => {
  setTimeout(() => {
    res.status(200).json([
      {
        id: 3,
        name: "Fetched from browser",
      },
      {
        id: 4,
        name: "Seed ready",
      },
    ]);
  }, 3000);
});

export default router;
