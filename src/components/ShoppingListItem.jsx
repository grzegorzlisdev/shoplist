// components import
import { useState } from 'react'

// import styles
import './style.css'

// library imports
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

import { CheckIcon } from '@heroicons/react/24/solid'

const ShoppingListItem = ({
  listItem,
  deleteItemFromShoppingList,
  toggleListItemStatus,
  runEditModeForItem,
}) => {

  return (
    <li className={`shopping-list-item ${listItem.status}`}>
      <button
        className={`btn-checkbox`}
        onClick={() => toggleListItemStatus(listItem)}
      >
        <div className={`check-circle-${listItem.status}`}>
          {listItem.status === 'done'
            ? (<CheckIcon with={16} height={16} />)
            : ('')
          }
        </div>
      </button>
      <div className="name-amount-wrapper">
        <div className={`list-item-name`}>
          {listItem.name}
        </div>
        <div className={`list-item-quantity`}>
          Amount: {listItem.quantity}
        </div>
      </div>

      <div className="list-item-buttons-wrapper">
        <button
          className={`edit-btn`}
          onClick={() => runEditModeForItem(listItem)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>
        <button
          className={`del-btn`}
          onClick={() => deleteItemFromShoppingList(listItem)}
        >
          <TrashIcon height={24} width={24} />
        </button>
      </div>
    </li>
  )
}

export default ShoppingListItem