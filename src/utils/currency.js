
const USD_TO_INR = 90; // Example conversion rate

export const formatINR = (price) => {
  const amountInINR = (Number(price) || 0) * USD_TO_INR;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amountInINR);
};