import React from "react";
import { Button } from "reactstrap";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import "./ItemDetail.css";

/** Show information about a item.
 *
 * Is rendered by Items to show a "card" for each item.
 *
 * Receives view func prop from parent, which is called on view.
 *
 * ItemCard -> ItemDetail
 */

const ItemDetail = ({ id, name }) => {
  let audio = new Audio(`/sounds/${name}.mp3`);
  const start = () => {
    audio.play();
  };

  return (
    <div className="item-detail shadow">
      <Card>
        <div className="img-hover-zoom">
          <CardImg
            alt={name}
            src={`/images/items/${name}.jpeg`}
            onClick={start}
          ></CardImg>
        </div>
        <CardBody>
          <CardTitle className="text-success" tag="h4">
            {name}
          </CardTitle>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button color="success me-md-2" onClick={start}>
              PLAY <i className="fas fa-volume-high"></i>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
