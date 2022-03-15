import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FunLearningApi from "../../api/api";
import ItemCard from "../Items/ItemCard";
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
        let category = await FunLearningApi.getCategory(handle);
        setCategory(category);
      }
      getCategory();
    },
    [handle]
  );

  if (!category) return <Loading />;

  return (
    <div className="mt-4">
      <h1 className="text-success text-center">{category.name}</h1>
      <p className="text-center">{category.description}</p>
      <ItemCard items={category.items} />
    </div>
  );
};

export default CategoryDetail;
