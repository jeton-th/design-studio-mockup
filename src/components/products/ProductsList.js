import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import { firestore } from '../../utils/firebaseApp';
import SingleProduct from './SingleProduct';

const ProductsList = () => {
  const { currentUser } = useContext(AuthContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    firestore.collection('products')
      .onSnapshot((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ uid: doc.id, data: doc.data() });
        });
        setProducts(products);
      });
  }, [currentUser]);

  return (
    <div className="products-list">
      {products && products.map((product) => (
        <SingleProduct
          uid={product.uid}
          product={product.data}
          key={`${currentUser.name}-${product.data.name}`}
        />
      ))}
    </div>
  );
};

export default ProductsList;
