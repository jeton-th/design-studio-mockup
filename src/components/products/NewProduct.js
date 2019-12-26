import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../auth/Auth';
import { firestore } from '../../utils/firebaseApp';

const NewProduct = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [newModal, setNewModal] = useState('');

  const handleName = (event) => setName(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handlePrice = (event) => setPrice(event.target.value);

  const resetFields = () => {
    setName('');
    setDescription('');
    setPrice('');
    setNewModal('');
  };

  const addProduct = (event) => {
    event.preventDefault();
    firestore.collection('products').doc()
      .set({
        name, description, price: Number(price), owner: currentUser.uid,
      })
      .then(() => resetFields())
      .catch((error) => setError(error));
  };

  return (
    <div className="new-product">
      <button
        type="button"
        className="icon-button"
        onClick={() => setNewModal('show')}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>

      <div className={`modal ${newModal}`}>
        <div>
          <h3>{t('new-product')}</h3>
          {error && <div className="error">{error}</div>}
          <form onSubmit={addProduct}>
            <label htmlFor="name">
              {t('title')}
:
              <input type="text" id="name" value={name} onChange={handleName} required />
            </label>
            <label htmlFor="description">
              {t('description')}
:
              <textarea name="description" value={description} onChange={handleDescription} required />
            </label>
            <label htmlFor="price">
              {t('price')}
:
              <input type="number" name="price" value={price} onChange={handlePrice} required />
            </label>

            <button type="button" onClick={resetFields}>{t('cancel')}</button>
            <button type="submit">{t('save')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
