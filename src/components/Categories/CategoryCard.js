import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Show info of a category on the Category List
 *
 * CategoryList -> CategoryCard
 */

const CategoryCard = ({ name, description, handle }) => {
  return (
    <div>
      <Link className="text-decoration-none" to={`/categories/${handle}`}>
        <Card body color="secondary mx-5 my-2" outline>
          <CardBody>
            <CardTitle className="text-success" tag="h5">
              {name}
            </CardTitle>
            <CardText className="text-dark">{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CategoryCard;
