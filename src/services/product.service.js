import Product from '../models/product.model.js';

const getServiceAllProducts = () => {
    return Product.find().sort({ createdAt: -1 });
}

const createServiceProduct = (productData) => {
    const newProduct = new Product(productData);
    return newProduct.save();
}

const getServiceProductById = (productId) => {
    return Product.findById(productId);
}

const updateServiceProduct = (productId, productData) => {
    return Product.findByIdAndUpdate(productId, productData, { new: true });
}

const deleteServiceProduct = (productId) => {
    return Product.findByIdAndDelete(productId);
}

export { getServiceAllProducts, createServiceProduct, getServiceProductById, updateServiceProduct, deleteServiceProduct };