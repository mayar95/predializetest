const Guarantee = require('../models/guarantee');
const Ticket = require('../models/tickets');
const Product = require('../models/products');


const guaranteeArray = require('./guarantee');
const ticketsArray = require('./tickets');
const productsArray = require('./products');

Promise.all(
  ticketsArray.map(async(ticket) => {
  const checkTickets = await Ticket.find({});
  if(!checkTickets.length) {
    try {
      const ticketsData = new Ticket(ticket);
      await ticketsData.save()
    } catch (error) {
      console.log(error)
    }
  }
  }),
  guaranteeArray.map(async (guarantee) => {
    const checkGuarantee = await Guarantee.find({});
    if (!checkGuarantee.length) {
      try {
        const guaranteeData = new Guarantee(guarantee);
        await guaranteeData.save()
      } catch (error) {
        console.log(error)
      }
    }
  }),
  productsArray.map(async (product) => {
    const checkProduct = await Product.find({});
    if (!checkProduct.length) {
      try {
        const productData = new Product(product);
        await productData.save()
      } catch (error) {
        console.log(error)
      }
    }
  }),
);
