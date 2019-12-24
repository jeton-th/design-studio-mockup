import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../auth/Auth';
import { firestore } from '../../utils/firebaseApp';

const SingleProduct = ({ product }) => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);
  const [deletePrompt, setDeletePrompt] = useState('');
  const deleteProduct = (uid) => firestore.collection('products').doc(uid).delete();

  return (
    <div key={`${currentUser.name}-${product[1].name}`}>
      <strong>{product[1].name}</strong>
      <span> - $</span>
      <span>{product[1].price}</span>
      <button type="button">{t('edit')}</button>
      <button type="button" onClick={() => setDeletePrompt('show')}>{t('delete')}</button>

      <div className={`modal ${deletePrompt}`}>
        <div className="delete-prompt">
          <p>{t('delete-prompt')}</p>
          <button type="button" onClick={() => setDeletePrompt('')}>{t('cancel')}</button>
          <button type="button" onClick={() => deleteProduct(product[0])}>{t('delete')}</button>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default SingleProduct;
