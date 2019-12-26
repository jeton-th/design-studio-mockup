import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../auth/Auth';
import { firestore } from '../../utils/firebaseApp';

const SingleProduct = ({ uid, product }) => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);
  const [editModal, setEditModal] = useState('');
  const [deleteModal, setDeleteModal] = useState('');
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [error, setError] = useState('');
  const handleName = (event) => setName(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handlePrice = (event) => setPrice(event.target.value);
  const deleteProduct = (uid) => firestore.collection('products').doc(uid).delete();
  const resetFields = () => {
    setEditModal('');
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
  };
  const updateProduct = (event, uid) => {
    event.preventDefault();
    firestore.collection('products').doc(uid)
      .update({
        name: name || product.name,
        description: description || product.description,
        price: Number(price || product.price),
      })
      .then(() => resetFields())
      .catch(() => setError(t('document-missing')));
  };

  return (
    <div
      className="product-item"
      key={`${currentUser.name}-${product.name}`}
    >
      <h3>
        <span>{product.name}</span>
        <span> - $</span>
        <span>{product.price}</span>
      </h3>

      {(currentUser.role === 'admin' || product.owner === currentUser.uid)
        && (
          <div>
            <button type="button" className="icon-button" onClick={() => setEditModal('show')}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button type="button" className="icon-button" onClick={() => setDeleteModal('show')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        )}

      <div className={`modal ${editModal}`}>
        <div>
          <h3>{t('edit-product')}</h3>
          {error && <div className="error">{error}</div>}
          <form onSubmit={(event) => updateProduct(event, uid)}>
            <input type="text" value={name} onChange={handleName} placeholder={t('title')} required />
            <textarea value={description} onChange={handleDescription} placeholder={t('description')} required />
            <input type="number" value={price} onChange={handlePrice} placeholder={t('price')} required />

            <button type="button" onClick={resetFields}>{t('cancel')}</button>
            <button type="submit">{t('save')}</button>
          </form>
        </div>
      </div>

      <div className={`modal ${deleteModal}`}>
        <div>
          <p>{t('delete-prompt')}</p>
          <button type="button" onClick={() => setDeleteModal('')}>{t('cancel')}</button>
          <button type="button" onClick={() => deleteProduct(uid)}>{t('delete')}</button>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  uid: PropTypes.string.isRequired,
  product: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default SingleProduct;
