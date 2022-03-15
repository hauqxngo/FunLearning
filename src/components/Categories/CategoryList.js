import React, { useEffect, useState } from "react";
import FunLearningApi from "../../api/api";
import SearchForm from "../Forms/SearchForm";
import CategoryCard from "./CategoryCard";
import Loading from "../Navigation/Loading";

/** Shows the list of all categories from API
 *
 * Search box will filter categories to those matching
 *
 * Routed as /categories
 *
 * Routes -> {SearchForm, CategoryCard}
 */

const CategoryList = () => {
  const [categories, setCategories] = useState(null);

  useEffect(function getCategoriesOnMount() {
    search();
  }, []);

  async function search(name) {
    let cats = await FunLearningApi.getCategories(name);
    setCategories(cats);
  }

  if (!categories) return <Loading />;

  return (
    <div>
      <h3 className="text-center text-success mt-4">
        What do you want to learn today?
      </h3>
      <SearchForm searchFor={search} />
      {categories.length ? (
        <div>
          {categories.map((c) => (
            <CategoryCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
            />
          ))}
        </div>
      ) : (
        <p className="mx-5">Sorry, no categories were found.</p>
      )}
    </div>
  );
};

export default CategoryList;
