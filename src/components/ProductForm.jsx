import React, { useState } from 'react';
import '../assets/css/ProductsForm.css'

const ProductForm = ({ onAdd, onEdit, product }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [category, setCategory] = useState(product ? product.category : '');
  const [price, setPrice] = useState(product ? product.price : 0);
  const [stock, setStock] = useState(product ? product.stock : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: product ? product.id : Date.now(),
      name,
      category,
      price,
      stock,
    };
    if (product) {
      onEdit(newProduct);
    } else {
      onAdd(newProduct);
    }
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setCategory('');
    setPrice(0);
    setStock(0);
  };

  return (
    <div className='product-form'>
      <h3>{product ? 'Edit Product' : 'Add Product'}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(parseInt(e.target.value))}
          />
        </div>
        <button type="submit">{product ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default ProductForm;