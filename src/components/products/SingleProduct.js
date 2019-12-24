import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../auth/Auth';
import { firestore } from '../../utils/firebaseApp';

const SingleProduct = ({ product }) => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  const deleteProduct = (uid) => {
    firestore.collection('products').doc(uid).delete()
      .then(() => console.log('Document successfully deleted!'))
      .catch((error) => console.error('Error removing document: ', error));
  };

  return (
    <div key={`${currentUser.name}-${product[1].name}`}>
      <strong>{product[1].name}</strong>
      <span> - $</span>
      <span>{product[1].price}</span>
      <button type="button">{t('Edit')}</button>
      <button type="button" onClick={() => deleteProduct(product[0])}>{t('Delete')}</button>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default SingleProduct;
