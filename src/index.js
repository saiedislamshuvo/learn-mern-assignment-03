const orders = getOrders();

console.log('Calculate total orders amount: ', calculateTotalOrdersAmount(orders));

console.log('Calculate total paid amount: ', calculateTotalPaidAmount(orders));

console.log('Calculate total due amount: ', calculateTotalDueAmount(orders));

console.log('Calculate total orders count: ', calculateTotalOrdersCount(orders));

console.log('Calculate averge order amount: ', calculateTotalAvgOrderAmount(orders));

console.log('Calculate item wise total sale: ', getItemWiseTotalSale(orders));