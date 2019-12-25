import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import { firestore } from '../../utils/firebaseApp';
import '../../style/sass/Home.scss';

const Home = () => {
  // const { t } = useTranslation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    firestore.collection('products')
      .orderBy('price').limit(3)
      .onSnapshot((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ uid: doc.id, data: doc.data() });
        });
        setProducts(products);
      });
  }, []);

  return (
    <div className="home">
      <div className="showcase">
        {products && products.map((product) => (
          <div className="product" key={product.uid}>
            <h2>{product.data.name}</h2>
            <p>{product.data.description}</p>
            <strong>
              <span>$</span>
              <span>{product.data.price}</span>
            </strong>
          </div>
        ))}
      </div>

      <div className="lorem">
        <h2>Lorem ipsum dolor ...</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique ducimus at omnis, sint nulla illum,
          in sapiente dolorem pariatur facere odit optio.
          Quae reiciendis at quas voluptatibus voluptates eligendi quasi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique ducimus at omnis, sint nulla illum,
          in sapiente dolorem pariatur facere odit optio.
          Quae reiciendis at quas voluptatibus voluptates eligendi quasi!
        </p>
      </div>
    </div>
  );
};

export default Home;
