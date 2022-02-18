import React from "react";
import ItemDetail from "./ItemDetail";

/** Show list of item cards.
 *
 * Used by CategoryDetail to list items. Receives a view
 * func prop which will be called by ItemDetail on view.
 *
 * CategoryDetail -> Items -> ItemDetail
 *
 */

const Items = ({ items, view }) => {
  return (
    <div>
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

export default Items;
