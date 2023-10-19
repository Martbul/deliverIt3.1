const Order = require("../models/order")


exports.create = async (orderData) => {
   const order = await Order.create(orderData)
   return order
}

exports.getAll = async (search) => {
  let filterOrders = await Order.find().lean();

// TODO: this will be filtered later with mongoose
  if (search) {
    filterOrders = filterOrders.filter((order) =>
      order.order.toLowerCase().includes(search.toLowerCase())
    );
  }


  return filterOrders;
};

exports.getSingleOrder = (id) => Order.findById(id)