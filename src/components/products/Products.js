import React from 'react';
import { useTranslation } from 'react-i18next';
import NewProduct from './NewProduct';
import ProductsList from './ProductsList';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="products">
      <h1>{t('Products')}</h1>
      <NewProduct />
      <ProductsList />
    </div>
  );
};
export default Products;
