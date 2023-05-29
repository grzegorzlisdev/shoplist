import { useState } from 'react'

// syling import
// import './App.css'

// compoments import
import AddProductForm from './components/AddProductForm'
import ShoppingList from './components/ShoppingList'
import EditProductForm from './components/EditProductForm'

function App() {

  const [shoppingList, setShoppingList] = useState([]);
  const [itemToEdit, setItemToEdit] = useState({});
  const [isEditWindowActive, setIsEditWindowActive] = useState(false);

  const addItemToShoppingList = (item) => {
    setShoppingList(prevState => {
      return (
        [item, ...prevState]
      )
    });
  }

  const deleteItemFromShoppingList = (itemFromList) => {
    setShoppingList(prevState => {
      return (
        prevState.filter(item => item.id != itemFromList.id)
      )
    }
    );
  }

  const toggleListItemStatus = (itemFromList) => {
    if (itemFromList.status === 'undone') {
      moveItemToEndAndSetDone(itemFromList);
    } else {
      moveItemToStartAndSetUndone(itemFromList);
    }
  }

  const checkIndexInShoppingList = (itemFromList) => {
    let indexOfItem = -1;
    shoppingList.map((item, index) => {
      if (item.id === itemFromList.id) {
        indexOfItem = index;
      }
    })
    return indexOfItem;
  }

  const moveItemToEndAndSetDone = (itemFromList) => {
    const indexOfItem = checkIndexInShoppingList(itemFromList);
    const updatedShoppingList = [...shoppingList];
    const itemToMove = updatedShoppingList.splice(indexOfItem, 1)[0];

    itemToMove.status = 'done';
    updatedShoppingList.push(itemToMove);

    setShoppingList(updatedShoppingList);
  }

  const moveItemToStartAndSetUndone = (itemFromList) => {
    const indexOfItem = checkIndexInShoppingList(itemFromList);
    const updatedShoppingList = [...shoppingList];
    const itemToMove = updatedShoppingList.splice(indexOfItem, 1)[0];

    itemToMove.status = 'undone';
    updatedShoppingList.unshift(itemToMove);

    setShoppingList(updatedShoppingList);
  }

  const runEditModeForItem = (itemFromList) => {
    setItemToEdit(itemFromList);
    setIsEditWindowActive(true);
  }

  const editListItem = (itemFromList, newName, newQuantity) => {

    if (itemFromList && newName && newQuantity) {
      shoppingList.map((item) => {
        if (item.id === itemFromList.id) {
          item.name = newName;
          item.quantity = newQuantity;
        }
      })
      setShoppingList([...shoppingList]);
    }

    setItemToEdit({});
    setIsEditWindowActive(false);
  }

  return (
    <div className="app-container">
      <AddProductForm
        addItemToShoppingList={addItemToShoppingList}
      />
      <ShoppingList
        shoppingList={shoppingList}
        deleteItemFromShoppingList={deleteItemFromShoppingList}
        toggleListItemStatus={toggleListItemStatus}
        runEditModeForItem={runEditModeForItem}
      />
      {isEditWindowActive && (
        <EditProductForm editListItem={editListItem} itemToEdit={itemToEdit} />
      )}
    </div>
  )
}

export default App













