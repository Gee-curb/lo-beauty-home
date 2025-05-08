// src/productUtils.js

export const getProducts = () => {
    const stored = localStorage.getItem('products');
    return stored ? JSON.parse(stored) : [];
  };
  
  export const saveProduct = (product) => {
    const current = getProducts();
    current.push(product);
    localStorage.setItem('products', JSON.stringify(current));
  };