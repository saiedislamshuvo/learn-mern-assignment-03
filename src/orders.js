const calculateTotalOrdersAmount = (orders) => orders.reduce((acc, cur) => acc + cur.total, 0);

const calculateTotalPaidAmount = (orders) => orders.reduce((acc, cur) => acc + cur.paid, 0);

const calculateTotalDueAmount = (orders) => orders.reduce((acc, cur) => acc + cur.due, 0);

const calculateTotalOrdersCount = (orders) => orders.length;

const calculateTotalAvgOrderAmount = (orders) => calculateTotalOrdersAmount(orders) / calculateTotalOrdersCount(orders);

const getCart = (orders) => orders.reduce((acc, cur) => [...acc, ...cur.cart], []);

const getItemWiseTotalSale = (orders) => {
    const cart = getCart(orders);
    return cart.reduce((acc, cur) => ({
        ...acc,
        [cur.product]: acc[cur.product]
            ? acc[cur.product] + cur.totalPrice
            : cur.totalPrice
    }), []);
};