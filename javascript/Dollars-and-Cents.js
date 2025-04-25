function formatMoney(amount) {
  const formattedAmount = amount.toFixed(2);
  console.log(`$${formattedAmount}`);
}
const input = 456.78;
formatMoney(input);
