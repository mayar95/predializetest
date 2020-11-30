const { v4: uuidv4 } = require('uuid');
const Product = require('../models/products');
const Ticket = require('../models/tickets');

const getProductById = async (id) => {
    const product = await Product.findOne({ _id: id });
    return product ?? null
}

const getTicketsByProductId = async (id) => {
    const tickets = await Ticket.find({ productId: id });
    return tickets ?? []
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json(err);
    }
};

exports.createProduct = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const product = new Product({
        ...req.body,
        createdAt: Date.now()
    });
    product
    .save()
    .then(() => res.json(product))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err)
    });
};

exports.getProductTickets = async (req, res) => {
    const productId = req.params.productId;
    try {
        const tickets = await getTicketsByProductId(productId);
        return res.status(200).json(tickets);
    } catch (err) {
      return res.status(500).json(err);
    }
};

exports.createTicket = async (req, res) => {
    const productId = req.params.productId;
    const product = await getProductById(productId);

    if (!product) return res.status(400).send({ message: "not a valid productId" });
 
    const ticket = new Ticket({
        ...req.body,
        productId,
        ticketCode: `${product.name}-${uuidv4()}`,
        status: 'checking',
        createdAt: Date.now()
    });
    product.tickets.push(ticket)
    product.save();
    ticket
    .save()
    .then(() => res.json(ticket))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err)
    });
};