import { useState, useEffect } from 'react'

// styles import
import './style.css'

const EditProductForm = ({
  editListItem,
  itemToEdit,
}) => {

  const [newProduct, setNewProduct] = useState(itemToEdit.name);
  const [newQuantity, setNewQuantity] = useState(itemToEdit.quantity);

  useEffect(() => {
    setNewProduct(itemToEdit.name);
    setNewQuantity(itemToEdit.quantity);
  }, [itemToEdit]); // add itemToEdit as a dependency to the useEffect hook

  const handleFormSubmit = (e) => {
    e.preventDefault();
    editListItem(itemToEdit, newProduct, newQuantity);
    setNewProduct("");
    setNewQuantity(0);
  }

  const discardChanges = () => {
    editListItem(itemToEdit);
  }

  return (
    <div className="edit-product-form-container">
      <form
        className="edit-product-form"
        onSubmit={handleFormSubmit}
      >
        <div className="tab-title">Edit product</div>
        <div className="form-field-wrapper">
          <label
            className="edit-form-label"
            htmlFor="product"
          >
            Product:
          </label>
          <input
            className="input edit-form-input"
            type="text"
            id="product"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            required
          />
        </div>
        <div className="form-field-wrapper">
          <label
            className="edit-form-label"
            htmlFor="quantity"
          >
            Amount:
          </label>
          <input
            className="input edit-form-input"
            type="number"
            max="999"
            id="quantity"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
        </div>
        <div className="form-buttons-wrapper">
          <button
            className="btn bg-main-1"
            type="submit"
          >
            Save
          </button>
          <button
            className="btn"
            type="button"
            onClick={discardChanges}
          >
            Discard
          </button>
        </div>
      </form>
    </div>

  )
}
export default EditProductForm 