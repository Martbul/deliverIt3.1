const Order = require("../models/order")


exports.create = async (orderData) => {
   const order = await Order.create(orderData)
   return order
}

exports.getAll = async (search, from, to) => {
  let filterOrders = await Order.find().lean();

// TODO: this will be filtered later with mongoose
  if (search) {
    filterOrders = filterOrders.filter((order) =>
      order.order.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    filterOrders = filterOrders.filter(
      (order) => order.difficultyLevel >= Number(from)
    );
  }

  if (to) {
    
    filterOrders = filterOrders.filter(
      (order) => order.difficultyLevel <= Number(to)
    );
  }

  return filterOrders;
};

exports.getSingleOrder = (id) => Order.findById(id)