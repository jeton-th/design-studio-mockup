import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import { firestore } from '../../utils/firebaseApp';
import SingleProduct from './SingleProduct';

const ProductsList = () => {
  const { currentUser } = useContext(AuthContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const collection = (currentUser.role === 'admin')
      ? firestore.collection('products')
      : firestore.collection('products').where('owner', '==', currentUser.uid);

    collection.onSnapshot((querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push([doc.id, doc.data()]);
      });
      setProducts(products);
    });
  }, [currentUser]);

  return (
    <div className="products-list">
      {products && products.map((product) => (
        <SingleProduct
          product={product}
          key={`${currentUser.name}-${product[1].name}`}
        />
      ))}
    </div>
  );
};

export default ProductsList;
