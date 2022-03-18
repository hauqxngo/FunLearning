import React from "react";
import ItemDetail from "./ItemDetail";
import Footer from "../Pages/Footer";
import "./ItemCard.css";

/** Show list of item cards.
 *
 * Used by CategoryDetail to list items. Receives a view
 * func prop which will be called by ItemDetail on view.
 *
 * CategoryDetail -> ItemCard -> ItemDetail
 *
 */

const ItemCard = ({ items }) => {
  return (
    <>
      <div className="item-card">
        {items.map((i) => (
          <ItemDetail key={i.id} id={i.id} name={i.name} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ItemCard;
