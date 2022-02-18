import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FunLearningApi from "../../api/api";
import Items from "../Items/Items";
import Loading from "../Navigation/Loading";

/** Show the category detail with its item list
 *
 * Routed as /categories/:handle
 *
 * Routes -> CategoryDetail -> ItemList
 */

const CategoryDetail = () => {
  const { handle } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(
    function getCategoryDetail() {
      async function getCategory() {
        let cat = await FunLearningApi.getCategory(handle);
        setCategory(cat);
      }
      getCategory();
    },
    [handle]
  );

  if (!category) return <Loading />;

  return (
    <div>
      <h1 className="text-success text-center">{category.name}</h1>
      <p className="text-center">{category.description}</p>
      <Items items={category.items} />
    </div>
  );
};

export default CategoryDetail;
