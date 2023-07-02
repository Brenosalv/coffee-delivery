import * as zod from "zod";
import { newOrderSchema } from "../schemas/checkoutForm";

export type CheckoutFormData = zod.infer<typeof newOrderSchema>;
