import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import '../assets/css/ProductsManagement.css';

function ProductsManagement({ products, setProducts }) {

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div className='products-management'>
      <h2>Products Management</h2>
      <ProductList products={products} onDelete={deleteProduct} />
      <ProductForm onAdd={addProduct} onEdit={editProduct} />
    </div>
  );
}

export default ProductsManagement;
