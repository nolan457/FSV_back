import mongoose from 'mongoose';
import * as productService from '../services/product.service.js';

export async function listProducts(req, res) {
    try {
        const products = await productService.getServiceAllProducts()
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'ERROR_INTERNO_DEL_SERVIDOR' });
    } 
}

export async function createProduct(req, res) {
    try {
        const productData = req.body;
        const newProduct = await productService.createServiceProduct(productData);
        return res.status(201).json(newProduct);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({
                message: 'Error de validación',
                details: Object.values(error.errors).map(item => item.message)
            })
        }

        console.error(error);
        return res.status(500).json({ message: 'ERROR_INTERNO_DEL_SERVIDOR' });
    }
}

export async function getProductById(req, res) {
    try {
        const product = await productService.getServiceProductById(req.params.id);
        if (!product){
            return res.status(404).json({ message: 'PRODUCTO_NO_ENCONTRADO' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'ERROR_INTERNO_DEL_SERVIDOR' });
    }
}

export async function updateProduct(req, res) {
    try {
        const product = await productService.updateServiceProduct(req.params.id, req.body);
        if (!product){
            return res.status(404).json({ message: 'PRODUCTO_NO_ENCONTRADO' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'ERROR_INTERNO_DEL_SERVIDOR' });
    }
}

export async function deleteProduct(req, res) {
    try {
        const product = await productService.deleteServiceProduct(req.params.id);
        if (!product){
            return res.status(404).json({ message: 'PRODUCTO_NO_ENCONTRADO' });
        }
        return res.status(204).json({ message: 'PRODUCTO_ELIMINADO' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'ERROR_INTERNO_DEL_SERVIDOR' });
    }
}