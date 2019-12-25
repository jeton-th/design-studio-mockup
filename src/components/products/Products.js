import React from 'react';
import { useTranslation } from 'react-i18next';
import NewProduct from './NewProduct';
import ProductsList from './ProductsList';
import '../../style/sass/Products.scss';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="products">
      <h1>{t('products')}</h1>
      <NewProduct />
      <ProductsList />
    </div>
  );
};

export default Products;
