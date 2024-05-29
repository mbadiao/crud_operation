const Product  = require('../Models/ProductModel')


const CreateProduct = async (req, res) => {
    try {
        const {ProductName, ProductType, ProductPrice} =  req.body
        const product = await Product.create({
            ProductName,
            ProductType,
            ProductPrice
        })
        return res.status(201).json({message : "successfully create product", product})
    } catch (error) {
        console.log('Failed to create product', error)
        return res.status(500).json(error)
    }
}

const GetAllProduct = async (req,res) => {
    try {
        const product = await Product.find()
        return res.status(201).json({message : "successfully find products", product})
    } catch (error) {
        console.log('Failed to get products', error)
        return res.status(500).json(error)
    }
}

const UpdateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { ProductName, ProductType, ProductPrice } = req.body;
        
        const product = await Product.findByIdAndUpdate(
            id,
            {
                ProductName,
                ProductType,
                ProductPrice
            },
            { new: true } 
        );
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        return res.status(200).json({ message: "Successfully updated product", product });
    } catch (error) {
        console.error('Failed to update product', error);
        return res.status(500).json({ message: "Failed to update product", error });
    }
}

const DeleteProduct = async (req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        return res.status(200).json({ message: "Successfully deleted product", product });
    } catch (error) {
        console.error('Failed to update product', error);
        return res.status(500).json({ message: "Failed to update product", error });
    }
}

module.exports = {CreateProduct, GetAllProduct, UpdateProduct, DeleteProduct}