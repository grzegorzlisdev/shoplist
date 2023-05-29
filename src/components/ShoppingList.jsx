// components import
import ShoppingListItem from './ShoppingListItem'

// import styles
import './style.css'

const ShoppingList = ({
  shoppingList,
  deleteItemFromShoppingList,
  toggleListItemStatus,
  runEditModeForItem,
}) => {

  return (
    <ul className="shopping-list">
      {shoppingList.length === 0
        ? (
          <p className="empty-list">No products in the shopping list...</p>
        )
        : (
          shoppingList.map((listItem) => (
            <ShoppingListItem
              key={listItem.id}
              listItem={listItem}
              deleteItemFromShoppingList={deleteItemFromShoppingList}
              toggleListItemStatus={toggleListItemStatus}
              runEditModeForItem={runEditModeForItem}
            />
          ))
        )}
    </ul>
  );
};

export default ShoppingList