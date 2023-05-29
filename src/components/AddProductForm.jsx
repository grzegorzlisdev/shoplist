
import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

const AddProductForm = ({ addItemToShoppingList }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleFormSubmit = (e) => {
    if (product !== "") {
      e.preventDefault();
    addItemToShoppingList({
      name: product,
      quantity: quantity,
      id: Date.now(),
      status: 'undone'
    });
    setProduct("");
    setQuantity(1);
    }
    
  }

  const increaseQuantity = (e) => {
    e.preventDefault();
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  }

  const decreaseQuantity = (e) => {
    e.preventDefault();
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFormSubmit(e);
    }
  };

  return (
    <div className="add-product-form-container">
      <div className="app-logo">
        <p>.shoplist</p>
      </div>
      <form className="add-product-form">
        <input
          className="input"
          type="text"
          id="product"
          placeholder="Enter Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          onKeyPress={handleKeyPress}
        />
        <div className="set-quantity-wrapper">
          <button className="quantity-set-btn" onClick={decreaseQuantity} tabIndex={2}>
            <MinusIcon height={24} width={24} />
          </button>
          <input
            className="quantity-input"
            type="number"
            max="999"
            id="quantity"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            onKeyPress={handleKeyPress}
          />
          <button className="quantity-set-btn" onClick={increaseQuantity} tabIndex={3}>
            <PlusIcon height={24} width={24} />
          </button>
        </div>
        <button className="add-button" type="submit" onClick={handleFormSubmit} tabIndex={1}>
          <PlusIcon height={24} width={24} />
        </button>
      </form>
    </div>

  )
}

export default AddProductForm;
