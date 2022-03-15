import React from "react";
import ItemDetail from "./ItemDetail";
import "./ItemCard.css";

/** Show list of item cards.
 *
 * Used by CategoryDetail to list items. Receives a view
 * func prop which will be called by ItemDetail on view.
 *
 * CategoryDetail -> ItemCard -> ItemDetail
 *
 */

const ItemCard = ({ items, view }) => {
  return (
    <div className="item-card">
      {items.map((i) => (
        <ItemDetail
          key={i.id}
          id={i.id}
          name={i.name}
          categoryName={i.categoryName}
        />
      ))}
    </div>
  );
};

export default ItemCard;
