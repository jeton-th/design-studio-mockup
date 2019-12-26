import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../auth/Auth';
import NewProduct from './NewProduct';
import ProductsList from './ProductsList';

const Products = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="products">
      <header>
        <h2>{t('products')}</h2>
        {currentUser.role !== 'guest'
          && <NewProduct />}
      </header>
      <ProductsList />
    </div>
  );
};

export default Products;
