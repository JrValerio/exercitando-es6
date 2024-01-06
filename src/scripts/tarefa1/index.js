import { productsList } from "./database.js";

const calculateTotalCost = (customerName, products, discount = 0) => {
  const totalCost = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const discountAmount = totalCost * (discount / 100);
  const discountedTotalCost = totalCost - discountAmount;

  const formattedTotalCost = discountedTotalCost.toFixed(2);

  const message =
    discount === 0
      ? `Olá, ${customerName}! O total da sua compra é R$ ${formattedTotalCost} (sem desconto).`
      : `Olá, ${customerName}! O total da sua compra é R$ ${formattedTotalCost} (${discount}% de desconto).`;

  return message;
};

