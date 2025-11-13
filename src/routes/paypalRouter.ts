import { ERROR_CODES } from "../utils/codes.js";
import { Router } from "express";
import { createOrder, captureOrder } from "../services/paypalService.js";

const router = Router();

/**
 * Crea una nueva orden de pago
 */
router.post("/create-order", async (req, res) => {
  try {
    const { total, currency } = req.body;
    const order = await createOrder(total, currency);

    res.json({
      id: order.id,
      status: order.status,
      approveLink: order.links.find((l: any) => l.rel === "approve")?.href,
    });
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    throw new Error(ERROR_CODES.PAYMENTS[700])
  }
});

/**
 * Captura una orden después de la aprobación
 */
router.post("/capture-order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const capture = await captureOrder(id);

    res.json({
      message: "Pago capturado correctamente",
      data: capture,
    });
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    throw new Error(ERROR_CODES.PAYMENTS[710])
  }
});

export default router;
