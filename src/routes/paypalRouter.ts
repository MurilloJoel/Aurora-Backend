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
    res.status(500).json({ error: "Error al crear la orden de PayPal" });
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
    res.status(500).json({ error: "Error al capturar el pago" });
  }
});

export default router;
