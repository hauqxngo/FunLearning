import React, { useState, useEffect, useContext } from "react";
import { Button } from "reactstrap";
import UserContext from "../../UserContext";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

/** Show information about a item.
 *
 * Is rendered by Items to show a "card" for each item.
 *
 * Receives view func prop from parent, which is called on view.
 *
 * Items -> ItemDetail
 */

const ItemDetail = ({ id, name, categoryName }) => {
  const [viewed, setViewed] = useState();
  const { hasViewed, view } = useContext(UserContext);

  useEffect(
    (updateViewedButton) => {
      setViewed(hasViewed(id));
    },
    [id, hasViewed]
  );

  // View an item
  async function handleView() {
    if (hasViewed(id)) return;
    view(id);
    setViewed(true);
  }

  return (
    <div>
      <Card body color="secondary mx-5 my-2" outline>
        <CardBody>
          <CardTitle className="text-success" tag="h5">
            {name}
          </CardTitle>
          <h6>{categoryName}</h6>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button type="submit" color="success me-md-2" onClick={handleView}>
              {viewed ? "PLAY AGAIN" : "PLAY"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
