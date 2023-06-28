import { v4 as uuidv4 } from 'uuid';
import { PaymentMethodType } from "../../types/paymentMethods";
import cashIcon from "../paymentMethods/icons/cash.svg";
import creditCardIcon from "../paymentMethods/icons/creditCard.svg";
import debitCardIcon from "../paymentMethods/icons/debitCard.svg";

export const paymentMethods: PaymentMethodType[] = [
  {
    id: uuidv4(),
    src: creditCardIcon,
    name: "CREDIT CARD",
  },
  {
    id: uuidv4(),
    src: debitCardIcon,
    name: "DEBIT CARD",
  },
  {
    id: uuidv4(),
    src: cashIcon,
    name: "CASH",
  },
]